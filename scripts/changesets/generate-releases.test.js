import { describe, expect, it, vi } from 'vitest';

const fs = require('fs');
const os = require('os');
const path = require('path');

const {
  createRelease,
  getReleasedPackages,
  getReleaseNotes,
  isPrerelease,
} = require('./generate-releases');

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

  describe('getReleasedPackages', () => {
    it('returns packages that changesets published', async () => {
      const packages = [
        {
          packageJson: {
            name: '@contentful/f36-button',
          },
        },
        {
          packageJson: {
            name: '@contentful/f36-table',
          },
        },
      ];
      const changesetOutput = [
        'Package published successfully',
        'New tag: @contentful/f36-button@1.2.3',
        'New tag: @contentful/f36-table@4.5.6-alpha.0',
      ].join('\n');

      await expect(
        getReleasedPackages(changesetOutput, packages),
      ).resolves.toEqual([
        {
          tagName: '@contentful/f36-button@1.2.3',
          pkg: packages[0],
        },
        {
          tagName: '@contentful/f36-table@4.5.6-alpha.0',
          pkg: packages[1],
        },
      ]);
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
