const path = require('path');
const fs = require('fs');
const chalk = require('chalk');
const execa = require('execa');
const semverSatisfies = require('semver/functions/satisfies');
const readPkgUp = require('read-pkg-up');
const packages = require('./packages-list');
const inquirer = require('inquirer');

const dependencyProperties = [
  'dependencies',
  'devDependencies',
  'clientDependencies',
  'isomorphicDependencies',
  'buildDependencies',
];

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

function getOutput(pkgManager, { newPackages, removePackages }) {
  if (pkgManager.length === 0) process.exit(0);
  console.log('You can run the following commands to update the packages:\n');
  pkgManager.forEach((pkgManager) => {
    const result = [
      chalk.bold(`For ${pkgManager}:`),
      `  ${getCmd(pkgManager, 'uninstall', removePackages)}`,
      `  ${getCmd(pkgManager, 'install', newPackages)}`,
    ];
    console.log(result.filter((r) => r.trim()).join('\n'), '\n');
  });
}

async function updateDependencies(targetDir) {
  const cwd = path.resolve(process.cwd(), targetDir);
  const closestPkgJson = readPkgUp.sync({ cwd });
  let pkgManager = ['npm', 'yarn'];
  let removePackages = packages.PACKAGES_REMOVE;
  let newPackages = Object.keys(packages.PACKAGES_UPGRADE);

  if (!closestPkgJson) {
    console.log(
      chalk.yellow(
        "We didn't find your package.json, you may need to remove or install some packages:",
      ),
    );
    newPackages = newPackages.map(
      (pkg) => `${pkg}@${packages.PACKAGES_UPGRADE[pkg]}`,
    );

    return getOutput(pkgManager, { newPackages, removePackages });
  }
  const pkgDirname = path.dirname(closestPkgJson.path);
  const { packageJson } = closestPkgJson;

  // Check if packages need to be upgraded or removed
  const allDeps = dependencyProperties.reduce(
    (acc, dependency) => Object.assign(acc, packageJson[dependency] || {}),
    {},
  );
  removePackages = removePackages.filter((pkg) => Boolean(allDeps[pkg]));
  newPackages = newPackages
    .filter(
      (pkg) =>
        !allDeps[pkg] ||
        !semverSatisfies(packages.PACKAGES_UPGRADE[pkg], allDeps[pkg]),
    )
    .map((pkg) => `${pkg}@${packages.PACKAGES_UPGRADE[pkg]}`);

  // Select package manager based on lock file, fallback to npm if no lock file is found
  pkgManager = [
    (fs.existsSync(path.resolve(pkgDirname, 'package-lock.json')) && 'npm') ||
      (fs.existsSync(path.resolve(pkgDirname, 'yarn.lock')) && 'yarn') ||
      'npm',
  ];

  if (!removePackages.length && !newPackages.length) {
    console.log(chalk.green('No package needs to be updated!'));
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
        const cmd = [
          getCmd(pkgManager, 'uninstall', removePackages),
          getCmd(pkgManager, 'install', newPackages),
        ]
          .filter((c) => c.trim())
          .join(' && ');
        console.log(`Executing command: ${cmd}`);
        const { stdout } = execa.commandSync(cmd, { shell: true });
        console.log(stdout);
        return;
      }
      return getOutput(pkgManager, { newPackages, removePackages });
    });
}

module.exports = updateDependencies;
