const prettier = require('prettier');
const fs = require('fs');
const assembleReleasePlan = require('@changesets/assemble-release-plan')
  .default;
const { read } = require('@changesets/config');
const { readPreState } = require('@changesets/pre');
const readChangesets = require('@changesets/read').default;
const { getPackages } = require('@manypkg/get-packages');
const _ = require('lodash');

const cwd = process.cwd();

function getCurrentDate() {
  const date = new Date();
  const day = _.padStart(date.getDate().toString(), 2, '0');
  const month = _.padStart((date.getMonth() + 1).toString(), 2, '0');
  const year = date.getFullYear();

  return `## ${day}-${month}-${year}`;
}

async function getChangesetEntries() {
  const packages = await getPackages(cwd);
  const preState = await readPreState(cwd);
  const config = await read(cwd, packages);
  const changesets = await readChangesets(cwd);

  const releasePlan = assembleReleasePlan(
    changesets,
    packages,
    config,
    preState,
  );
  console.log(releasePlan);
  return releasePlan;
}

async function main() {
  const { releases } = await getChangesetEntries();

  const releaseEntries = releases.map((release) =>
    [release.displayName, '\n\n', ...release.changesets].join(''),
  );

  let content = [getCurrentDate(), ...releaseEntries].join('\n\n');

  content = prettier.format(content, {
    parser: 'markdown',
    printWidth: 80,
    singleQuote: true,
    trailingComma: 'es5',
  });

  // write to rc file
  fs.writeFileSync(`${cwd}/.changelogrc`, content);
}

main();
