import { beforeEach, describe, expect, it, vi } from 'vitest';
import fs from 'node:fs';
import { execaSync } from 'execa';
import inquirer from 'inquirer';
import { readPackageUpSync } from 'read-package-up';
import updateDependencies from '../updateDependencies.mjs';

vi.mock('node:fs', async (importOriginal) => {
  const original = await importOriginal();
  return { ...original, default: { ...original.default, existsSync: vi.fn() } };
});
vi.mock('execa', () => ({ execaSync: vi.fn(() => ({ stdout: '' })) }));
vi.mock('inquirer', () => ({ default: { prompt: vi.fn() } }));
vi.mock('read-package-up', () => ({ readPackageUpSync: vi.fn() }));
vi.mock('../packages-list.mjs', () => ({
  PACKAGES_REMOVE: ['old-package'],
  PACKAGES_UPGRADE: { 'new-package': '1.0.0' },
}));

describe('updateDependencies', () => {
  beforeEach(() => {
    vi.spyOn(console, 'log').mockImplementation(() => {});
    fs.existsSync.mockReturnValue(false);
    inquirer.prompt.mockResolvedValue({ packages: false });
    readPackageUpSync.mockReturnValue({
      path: '/project/package.json',
      packageJson: { dependencies: { 'old-package': '1.0.0' } },
    });
  });

  it.each([
    [
      false,
      'npm',
      'npm uninstall old-package',
      'npm install -S new-package@1.0.0',
    ],
    [true, 'yarn', 'yarn remove old-package', 'yarn add new-package@1.0.0'],
  ])(
    'prints manual commands with yarn lockfile %s',
    async (hasYarn, manager, remove, install) => {
      fs.existsSync.mockReturnValue(hasYarn);

      await updateDependencies('/project');

      expect(console.log).toHaveBeenCalledWith(
        expect.stringContaining(`For ${manager}:\n  ${remove}\n  ${install}`),
        '\n',
      );
      expect(execaSync).not.toHaveBeenCalled();
    },
  );

  it('prints both package managers when no package.json is found', async () => {
    readPackageUpSync.mockReturnValue(undefined);

    await updateDependencies('/project');

    expect(console.log).toHaveBeenCalledWith(
      expect.stringContaining(
        'yarn remove old-package\n  yarn add new-package@1.0.0',
      ),
      '\n',
    );
    expect(console.log).toHaveBeenCalledWith(
      expect.stringContaining(
        'npm uninstall old-package\n  npm install -S new-package@1.0.0',
      ),
      '\n',
    );
  });

  it.each([
    [{}, 'npm install -S new-package@1.0.0', 'npm uninstall'],
    [
      { 'old-package': '1.0.0', 'new-package': '1.0.0' },
      'npm uninstall old-package',
      'npm install',
    ],
  ])(
    'omits manual commands for empty package lists',
    async (dependencies, expected, omitted) => {
      readPackageUpSync.mockReturnValue({
        path: '/project/package.json',
        packageJson: { dependencies },
      });

      await updateDependencies('/project');

      const output = console.log.mock.calls.flat().join('\n');
      expect(output).toContain(expected);
      expect(output).not.toContain(omitted);
    },
  );

  it.each([
    [
      false,
      'npm',
      ['uninstall', 'old-package'],
      ['install', '-S', 'new-package@1.0.0'],
    ],
    [true, 'yarn', ['remove', 'old-package'], ['add', 'new-package@1.0.0']],
  ])(
    'executes commands as arguments with yarn lockfile %s',
    async (hasYarn, manager, remove, install) => {
      fs.existsSync.mockReturnValue(hasYarn);
      inquirer.prompt.mockResolvedValue({ packages: true });

      await updateDependencies('/project');

      expect(execaSync).toHaveBeenNthCalledWith(1, manager, remove, {
        cwd: '/project',
      });
      expect(execaSync).toHaveBeenNthCalledWith(2, manager, install, {
        cwd: '/project',
      });
    },
  );

  it('does not execute commands for empty package lists', async () => {
    readPackageUpSync.mockReturnValue({
      path: '/project/package.json',
      packageJson: { dependencies: {} },
    });
    inquirer.prompt.mockResolvedValue({ packages: true });

    await updateDependencies('/project');

    expect(execaSync).toHaveBeenCalledTimes(1);
    expect(execaSync).toHaveBeenCalledWith(
      'npm',
      ['install', '-S', 'new-package@1.0.0'],
      { cwd: '/project' },
    );
  });
});
