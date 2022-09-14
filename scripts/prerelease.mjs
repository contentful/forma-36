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

async function ignorePackage(pkgName) {
  const changesetConfigPath = path.resolve(cwd, '.changeset/config.json')
  const rawConfig = await fs.readFile(changesetConfigPath, { encoding: 'utf-8' })
  const jsonConfig = JSON.parse(rawConfig)
  const ignorePkgs = jsonConfig.ignore || []
  if(!ignorePkgs.includes(pkgName)) {
    jsonConfig.ignore = [pkgName, ...ignorePkgs]
    const stringified = JSON.stringify(jsonConfig, null, 2)
    await fs.writeFile(changesetConfigPath, stringified, { encoding: 'utf-8' })
  }
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

  const increase = prereleaseTag === tag ? 'prerelease' : 'preminor'
  const newVersion = semver.inc(version, increase, tag)
  await updatePackageJson(path.resolve(dir, 'package.json'), newVersion)

  // Avoid chageset publishing it, by adding the package to the ignore list
  await ignorePackage(name)

  if(publish) {
    // TODO: remove dry-run, kept here for testing before merging
    await exec(`npm publish ${dir} --tag ${tag}`, (error, stdout, stderr) => {
      if(!error) {
        console.log(stdout)
        console.log(`${name}@${newVersion} published: \nhttps://www.npmjs.com/package/${name}\n`)
      } else {
        console.error(error)
        console.error(stderr)
      }
    })
  } else {
    console.log(`Version for ${name} updated on package.json.`)
  }
}

main()
