import { describe, expect, it, vi } from 'vitest';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import {
  createRelease,
  assertReleaseComplete,
  getReleaseNotes,
  getPublishRegistry,
  getVersionedPackages,
  isPrerelease,
  main,
  releaseExists,
} from './generate-releases.mjs';

describe('generate-releases', () => {
  describe('getReleaseNotes', () => {
    it('extracts the latest release section from a changelog', () => {
      const changelog = [
        '# @contentful/f36-button',
        '',
        '## 1.2.3',
        '',
        '### Patch Changes',
        '',
        '- Fix button focus styles.',
        '',
        '### Minor Changes',
        '',
        '- Add button loading state.',
        '',
        '## 1.2.2',
        '',
        '### Patch Changes',
        '',
        '- Previous release note.',
      ].join('\n');

      expect(getReleaseNotes(changelog)).toBe(
        [
          '### Patch Changes',
          '',
          '- Fix button focus styles.',
          '',
          '### Minor Changes',
          '',
          '- Add button loading state.',
          '',
        ].join('\n'),
      );
    });
  });

  describe('isPrerelease', () => {
    const pkg = {
      packageJson: {
        name: '@contentful/f36-button',
      },
    };

    it('returns true for prerelease versions', () => {
      expect(
        isPrerelease({
          pkg,
          tagName: '@contentful/f36-button@1.2.3-alpha.0',
        }),
      ).toBe(true);
    });

    it('returns false for stable versions', () => {
      expect(
        isPrerelease({
          pkg,
          tagName: '@contentful/f36-button@1.2.3',
        }),
      ).toBe(false);
    });
  });

  describe('getVersionedPackages', () => {
    it('records changed public package versions, not unchanged or private packages', async () => {
      const packages = [
        {
          dir: path.join(process.cwd(), 'button'),
          packageJson: {
            name: '@contentful/f36-button',
            version: '1.2.3',
          },
        },
        {
          dir: path.join(process.cwd(), 'table'),
          packageJson: {
            name: '@contentful/f36-table',
            version: '4.5.6',
          },
        },
        { dir: 'private', packageJson: { private: true, version: '2.0.0' } },
      ];
      await expect(
        getVersionedPackages(packages, (file) =>
          JSON.stringify({
            version: file.startsWith('button') ? '1.2.2' : '4.5.6',
          }),
        ),
      ).resolves.toEqual([
        { name: '@contentful/f36-button', version: '1.2.3' },
      ]);
    });
  });

  describe('release recovery', () => {
    it('fails closed when a release is missing', async () => {
      const getReleaseByTag = vi.fn().mockRejectedValue({ status: 404 });
      const octokit = { rest: { repos: { getReleaseByTag } } };
      await expect(
        assertReleaseComplete(octokit, [
          { name: '@contentful/f36-button', version: '1.2.3' },
        ]),
      ).rejects.toThrow('Resume it from the version commit');
    });

    it('accepts completed releases and propagates API errors', async () => {
      const getReleaseByTag = vi.fn().mockResolvedValue({});
      const octokit = { rest: { repos: { getReleaseByTag } } };
      await expect(
        assertReleaseComplete(octokit, [
          { name: '@contentful/f36-button', version: '1.2.3' },
        ]),
      ).resolves.toBeUndefined();
      getReleaseByTag.mockRejectedValue({ status: 500 });
      await expect(releaseExists(octokit, 'tag')).rejects.toEqual({
        status: 500,
      });
    });
  });

  describe('getPublishRegistry', () => {
    const pkg = (name, registry) => ({
      packageJson: { name, publishConfig: registry ? { registry } : {} },
    });

    it('uses the registry configured by the publishable packages', () => {
      expect(
        getPublishRegistry([
          pkg('@contentful/a', 'https://registry.example/'),
          pkg('@contentful/b', 'https://registry.example'),
          { packageJson: { name: '@contentful/private', private: true } },
        ]),
      ).toBe('https://registry.example');
    });

    it('rejects missing, inconsistent or unsupported configurations', () => {
      expect(() => getPublishRegistry([pkg('@contentful/a')])).toThrow(
        'publishConfig.registry',
      );
      expect(() =>
        getPublishRegistry([
          pkg('@contentful/a', 'https://one.example'),
          pkg('@contentful/b', 'https://two.example'),
        ]),
      ).toThrow('same registry');
      expect(() =>
        getPublishRegistry([pkg('@other/a', 'https://one.example')]),
      ).toThrow('scope');
      expect(() =>
        getPublishRegistry([pkg('@contentful/a', 'file:///tmp')]),
      ).toThrow('Invalid publish registry');
    });
  });

  describe('release orchestration', () => {
    const pkg = {
      dir: path.join(process.cwd(), 'example'),
      packageJson: {
        name: '@contentful/f36-example',
        version: '1.1.0',
        publishConfig: { registry: 'https://registry.example/' },
      },
    };
    const state = {
      releases: [{ name: pkg.packageJson.name, version: '1.1.0' }],
    };

    const setup = () => {
      const runCommand = vi.fn((command, args) => {
        if (command === 'git' && args[0] === 'ls-tree') return 'package.json';
        if (command === 'git' && args[0] === 'show')
          return '{"version":"1.0.0"}';
        if (command === 'git' && args[0] === 'diff') return 'package.json';
        if (command === 'git' && args[0] === 'rev-parse') return 'abc123';
        if (command === 'git' && args[0] === 'log') return 'abc123';
        if (command === 'npm') return '"1.1.0"';
        return '';
      });
      return {
        runCommand,
        loadPackages: vi.fn().mockResolvedValue({ packages: [pkg] }),
        loadState: vi.fn().mockResolvedValue(null),
        saveState: vi.fn().mockResolvedValue(undefined),
        octokit: {
          rest: {
            repos: {
              getReleaseByTag: vi.fn().mockRejectedValue({ status: 404 }),
            },
          },
        },
        makeRelease: vi.fn().mockResolvedValue(undefined),
      };
    };

    it('stops before publishing if the version push fails', async () => {
      const deps = setup();
      const normal = deps.runCommand.getMockImplementation();
      deps.runCommand.mockImplementation((command, args, options) => {
        if (command === 'git' && args[0] === 'push')
          throw new Error('rejected');
        return normal(command, args, options);
      });
      await expect(main(deps)).rejects.toThrow('rejected');
      expect(
        deps.runCommand.mock.calls.some(
          ([command, args]) => command === 'pnpm' && args.includes('publish'),
        ),
      ).toBe(false);
    });

    it('pushes the version commit before publishing and tags the commit', async () => {
      const deps = setup();
      await main(deps);
      const calls = deps.runCommand.mock.calls;
      const push = calls.findIndex(
        ([command, args]) => command === 'git' && args[0] === 'push',
      );
      const publish = calls.findIndex(
        ([command, args]) => command === 'pnpm' && args.includes('publish'),
      );
      expect(push).toBeGreaterThan(-1);
      expect(publish).toBeGreaterThan(push);
      expect(calls[publish][2].env['npm_config_@contentful:registry']).toBe(
        'https://registry.example',
      );
      expect(calls).toContainEqual([
        'git',
        ['tag', '@contentful/f36-example@1.1.0', 'abc123'],
      ]);
      expect(deps.makeRelease).toHaveBeenCalledOnce();
    });

    it('resumes missing tags and releases from the version commit', async () => {
      const deps = setup();
      deps.loadState.mockResolvedValue(state);
      await main({ ...deps, resume: true });
      expect(deps.makeRelease).toHaveBeenCalledOnce();
      expect(
        deps.runCommand.mock.calls.some(
          ([command, args]) => command === 'git' && args[0] === 'commit',
        ),
      ).toBe(false);
    });

    it('refuses recovery from a different commit', async () => {
      const deps = setup();
      deps.loadState.mockResolvedValue(state);
      const normal = deps.runCommand.getMockImplementation();
      deps.runCommand.mockImplementation((command, args, options) =>
        command === 'git' && args[0] === 'log'
          ? 'other'
          : normal(command, args, options),
      );
      await expect(main({ ...deps, resume: true })).rejects.toThrow(
        'exact version commit',
      );
    });

    it('rejects a stale checkout before versioning', async () => {
      const deps = setup();
      vi.stubEnv('CIRCLE_BRANCH', 'main');
      const normal = deps.runCommand.getMockImplementation();
      deps.runCommand.mockImplementation((command, args, options) =>
        command === 'git' && args[1] === 'FETCH_HEAD'
          ? 'newer'
          : normal(command, args, options),
      );
      try {
        await expect(main({ ...deps, check: true })).rejects.toThrow(
          'not the latest branch commit',
        );
      } finally {
        vi.unstubAllEnvs();
      }
    });
  });

  describe('createRelease', () => {
    it('creates a GitHub release with changelog notes and prerelease metadata', async () => {
      const packageDir = fs.mkdtempSync(path.join(os.tmpdir(), 'f36-release-'));
      const pkg = {
        dir: packageDir,
        packageJson: {
          name: '@contentful/f36-button',
        },
      };
      const createReleaseMock = vi.fn().mockResolvedValue(undefined);
      const octokit = {
        rest: {
          repos: {
            createRelease: createReleaseMock,
          },
        },
      };

      fs.writeFileSync(
        path.join(packageDir, 'CHANGELOG.md'),
        [
          '# @contentful/f36-button',
          '',
          '## 1.2.3-alpha.0',
          '',
          '### Patch Changes',
          '',
          '- Fix button focus styles.',
        ].join('\n'),
      );

      try {
        await createRelease(octokit, {
          pkg,
          tagName: '@contentful/f36-button@1.2.3-alpha.0',
        });
      } finally {
        fs.rmSync(packageDir, { recursive: true, force: true });
      }

      expect(createReleaseMock).toHaveBeenCalledWith({
        owner: 'contentful',
        repo: 'forma-36',
        name: '@contentful/f36-button@1.2.3-alpha.0',
        tag_name: '@contentful/f36-button@1.2.3-alpha.0',
        body: ['### Patch Changes', '', '- Fix button focus styles.'].join(
          '\n',
        ),
        prerelease: true,
      });
    });
  });
});
