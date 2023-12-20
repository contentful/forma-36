import fs from 'fs/promises';
import path from 'path';
import inquirer from 'inquirer';
import semver from 'semver';
import { getPackages } from '@manypkg/get-packages';
import { exec } from 'child_process';
import chalk from 'chalk';

const cwd = process.cwd();

async function updatePackageJson(pkgJsonPath, version) {
  const pkgRaw = await fs.readFile(pkgJsonPath, { encoding: 'utf-8' });
  const stringified = pkgRaw.replace(
    /("version".*?) (".*?")/i,
    `$1 "${version}"`,
  );
  await fs.writeFile(pkgJsonPath, stringified);
}

async function ignorePackage(pkgName) {
  const changesetConfigPath = path.resolve(cwd, '.changeset/config.json');
  const rawConfig = await fs.readFile(changesetConfigPath, {
    encoding: 'utf-8',
  });
  const jsonConfig = JSON.parse(rawConfig);
  const ignorePkgs = jsonConfig.ignore || [];
  if (!ignorePkgs.includes(pkgName)) {
    jsonConfig.ignore = [pkgName, ...ignorePkgs];
    const stringified = JSON.stringify(jsonConfig, null, 2);
    await fs.writeFile(changesetConfigPath, stringified, { encoding: 'utf-8' });
  }
}

async function main() {
  const { packages } = await getPackages(cwd);
  const choices = packages
    .map(({ packageJson }) => ({
      name: `${packageJson.name} (${packageJson.version})`,
      value: packageJson.name,
    }))
    .concat(new inquirer.Separator());

  const { pkgName } = await inquirer.prompt([
    {
      pageSize: 12,
      name: 'pkgName',
      message: 'Which package to make a pre-release?',
      type: 'list',
      choices,
    },
  ]);

  const { packageJson, dir } = packages.find(
    ({ packageJson }) => packageJson.name === pkgName,
  );
  const {
    version,
    name,
    publishConfig: { registry },
  } = packageJson;
  const prereleaseTag = semver.prerelease(version)?.[0];

  const { tag, publish, dryRun } = await inquirer.prompt([
    {
      name: 'dryRun',
      message: 'Run as dry-run, i.e. no changes will be applied?',
      type: 'confirm',
    },
    {
      name: 'tag',
      message: 'Which tag should be used for the pre-release?',
      type: 'list',
      choices: [
        {
          name: 'alpha',
        },
        {
          name: 'beta',
        },
      ],
      default: prereleaseTag,
    },
    {
      name: 'publish',
      message: 'Should the package be published?',
      type: 'confirm',
    },
  ]);

  const increase = prereleaseTag === tag ? 'prerelease' : 'preminor';
  const newVersion = semver.inc(version, increase, tag);
  const url =
    registry === 'https://npm.pkg.github.com/'
      ? `https://github.com/contentful/forma-36/pkgs/npm/${name.replace(
          '@contentful/',
          '',
        )}`
      : [registry, name].join('/');

  if (!dryRun) {
    await updatePackageJson(path.resolve(dir, 'package.json'), newVersion);
    // Avoid chageset publishing it, by adding the package to the ignore list
    await ignorePackage(name);
  } else {
    console.log(chalk.bold('Dry-run mode'));
    console.log(
      `Version for ${chalk.bold(name)} will be updated to ${chalk.bold(
        newVersion,
      )}.`,
    );
    console.log(
      `Package ${chalk.bold(name)} will be added to the changeset ignore list.`,
    );
    console.log(
      `Package ${chalk.bold(name)} will be published to registry ${chalk.bold(
        registry,
      )} with tag ${chalk.bold(tag)}.`,
    );
  }

  if (publish) {
    const dryRunFlag = dryRun ? '--dry-run' : '';
    console.log('');
    console.log(chalk.bold('Npm publish output'));
    await exec(
      `npm publish ${dir} --tag ${tag} ${dryRunFlag}`,
      (error, stdout, stderr) => {
        if (!error) {
          console.log(stdout);
          console.log(
            `${name}@${newVersion} published: \n${chalk.bold(url)}\n`,
          );
        } else {
          console.error(error);
          console.error(stderr);
        }
      },
    );
  } else {
    console.log(`Version for ${name} updated on package.json.`);
  }
}

main();
