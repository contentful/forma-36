import fs from 'fs/promises'
import path from 'path'
import inquirer from 'inquirer'
import semver from 'semver'
import { getPackages } from '@manypkg/get-packages'
import { exec } from 'child_process'

const cwd = process.cwd()

async function updatePackageJson(pkgJsonPath, version) {
  const pkgRaw = await fs.readFile(pkgJsonPath, { encoding: 'utf-8' })
  const stringified = pkgRaw.replace(/("version".*?) (".*?")/i, `$1 "${version}"`)
  await fs.writeFile(pkgJsonPath, stringified)
}

async function main() {
  const { packages } = await getPackages(cwd)
  const choices = packages.map(({ packageJson }) => ({
    name: `${packageJson.name} (${packageJson.version})`,
    value: packageJson.name
  })).concat(new inquirer.Separator())

  const { pkgName } = await inquirer.prompt([{
    pageSize: 12,
    name: 'pkgName',
    message: 'Which package to make a pre-release?',
    type: 'list',
    choices
  }])

  const { packageJson, dir } = packages.find(({ packageJson }) => packageJson.name === pkgName)
  const { version, name } = packageJson
  const prereleaseTag = semver.prerelease(version)?.[0]

  const { tag, publish } = await inquirer.prompt([{
    name: 'tag',
    message: 'Which tag should be used for the pre-release?',
    type: 'list',
    choices: [{
      name: 'alpha',
    }, {
      name: 'beta'
    }],
    default: prereleaseTag
  }, {
    name: 'publish',
    message: 'Should the package be published?',
    type: 'confirm'
  }])

  const newVersion = semver.inc(version, 'prerelease', tag)
  await updatePackageJson(path.resolve(dir, 'package.json'), newVersion)

  if(publish) {
    // TODO: remove dry-run
    await exec(`npm publish ${dir} --tag ${tag} --dry-run`, (error, stdout) => {
      if(!error) {
        console.log(stdout)
        console.log(`${name}@${newVersion} published: https://www.npmjs.com/package/${name}\n`)
      }
    })
  } else {
    console.log(`Version for ${name} updated on package.json`)
  }
}

main()
