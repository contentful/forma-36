import path from 'node:path';
import fs from 'node:fs';
import chalk from 'chalk';
import { execaSync } from 'execa';
import semverSatisfies from 'semver/functions/satisfies.js';
import { readPackageUpSync } from 'read-package-up';
import inquirer from 'inquirer';
import * as packages from './packages-list.mjs';

const dependencyProperties = [
  'clientDependencies',
  'isomorphicDependencies',
  'buildDependencies',
  'devDependencies',
  'dependencies',
];

/**
 * @param {string} pkgManager - name of package managers. eg. yarn, npm.
 * @param {'install'|'uninstall'} cmd - what should the command do, install or uninstall package.
 * @param {string[]} pkgs - list of package names to be installed or removed.
 * @returns {string} script to be used to install or remove the list of packages.
 */
const getCmd = (pkgManager, cmd, pkgs) => {
  const cmds = {
    npm: {
      install: `npm install -S ${pkgs.join(' ')}`,
      uninstall: `npm uninstall ${pkgs.join(' ')}`,
    },
    yarn: {
      install: `yarn add ${pkgs.join(' ')}`,
      uninstall: `yarn remove ${pkgs.join(' ')}`,
    },
  };
  return pkgs.length > 0 ? cmds[pkgManager][cmd] : '';
};

/**
 * @param {string} pkgManager - name of package managers. eg. yarn, npm.
 * @param {'install'|'uninstall'} cmd - what should the command do, install or uninstall package.
 * @param {string[]} pkgs - list of package names to be installed or removed.
 * @returns {[string, string[]]} executable and arguments to run.
 */
const getCommand = (pkgManager, cmd, pkgs) => {
  const commands = {
    npm: {
      install: ['npm', ['install', '-S', ...pkgs]],
      uninstall: ['npm', ['uninstall', ...pkgs]],
    },
    yarn: {
      install: ['yarn', ['add', ...pkgs]],
      uninstall: ['yarn', ['remove', ...pkgs]],
    },
  };
  return commands[pkgManager][cmd];
};

/**
 * @param {string|string[]} data.pkgManager - name or list of package managers. eg. yarn, npm.
 * @param {string[]} data.newPackages - List of packages to be installed with the version. eg. '@contentful/f36-components@latest'
 * @param {string[]} data.removePackages - List of packages to be removed.
 */
function getOutput({ newPackages, removePackages, pkgManager = null }) {
  console.log('You can run the following commands to update the packages:\n');

  // Print commands for each package manager, if no specific one set
  if (pkgManager === null) {
    ['yarn', 'npm'].forEach((manager) => {
      const result = [
        chalk.bold(`For ${manager}:`),
        `  ${getCmd(manager, 'uninstall', removePackages)}`,
        `  ${getCmd(manager, 'install', newPackages)}`,
      ];
      console.log(result.filter((r) => r.trim()).join('\n'), '\n');
    });
  } else {
    const result = [
      chalk.bold(`For ${pkgManager}:`),
      `  ${getCmd(pkgManager, 'uninstall', removePackages)}`,
      `  ${getCmd(pkgManager, 'install', newPackages)}`,
    ];
    console.log(result.filter((r) => r.trim()).join('\n'), '\n');
  }
}

// eslint-disable-next-line import/no-default-export
export default async function updateDependencies(targetDir) {
  const cwd = path.resolve(process.cwd(), targetDir);
  const closestPkgJson = readPackageUpSync({ cwd });
  let removePackages = packages.PACKAGES_REMOVE;
  const packagesForVersion = packages.PACKAGES_UPGRADE;
  let newPackages = Object.keys(packagesForVersion);

  // If no package.json is found
  if (!closestPkgJson) {
    console.log(
      chalk.yellow(
        "We didn't find your package.json, you may need to remove or install some packages:",
      ),
    );

    newPackages = newPackages.map((pkg) => `${pkg}@${packagesForVersion[pkg]}`);

    return getOutput({ newPackages, removePackages });
  }

  const pkgDirname = path.dirname(closestPkgJson.path);
  const { packageJson } = closestPkgJson;

  // Merge dependencies property from package.json
  const allDeps = dependencyProperties.reduce(
    (acc, dependency) => Object.assign(acc, packageJson[dependency] || {}),
    {},
  );

  // Filter packages to remove to only have the ones installed
  removePackages = removePackages.filter((pkg) => Boolean(allDeps[pkg]));

  // Check if packages version in package.json satisfies the new version
  newPackages = newPackages
    .filter(
      (pkg) =>
        !allDeps[pkg] ||
        !semverSatisfies(packagesForVersion[pkg], allDeps[pkg]),
    )
    .map((pkg) => `${pkg}@${packagesForVersion[pkg]}`);

  // Select package manager based on lock file, fallback to npm if no lock file is found
  const pkgManager =
    (fs.existsSync(path.resolve(pkgDirname, 'yarn.lock')) && 'yarn') || 'npm';

  // Check if there are packages to be removed or installed
  if (!removePackages.length && !newPackages.length) {
    console.log(chalk.green('No package need to be updated!'));
    return;
  }

  const note = {
    title: chalk.yellow('What will change if automatically updated:'),
    remove: removePackages.map((pkg) => `  * ${pkg}`).join('\n'),
    update: newPackages.map((pkg) => `  * ${pkg}`).join('\n'),
  };

  console.log(note.title);
  if (removePackages.length) {
    console.log([chalk.bold('Removed packages:'), note.remove].join('\n'));
  }
  if (newPackages.length) {
    console.log([chalk.bold('Installed packages:'), note.update].join('\n'));
  }

  await inquirer
    .prompt([
      {
        type: 'confirm',
        name: 'packages',
        message: 'Do you want the packages to be automatically updated?',
        default: false,
      },
    ])
    .then((answers) => {
      if (answers.packages) {
        const commands = [
          ['uninstall', removePackages],
          ['install', newPackages],
        ].filter(([, packagesToChange]) => packagesToChange.length > 0);

        commands.forEach(([commandType, packagesToChange]) => {
          const [command, args] = getCommand(
            pkgManager,
            commandType,
            packagesToChange,
          );
          console.log(
            `Executing command: ${[command, ...args].join(' ')} on ${cwd}`,
          );
          const { stdout } = execaSync(command, args, { cwd });
          console.log(stdout);
        });
        return;
      }
      return getOutput({ newPackages, removePackages, pkgManager });
    });
}
