import prettier from 'prettier';
import fs from 'fs';
import assembleReleasePlan from '@changesets/assemble-release-plan';
import { read } from '@changesets/config';
import { readPreState } from '@changesets/pre';
import readChangesets from '@changesets/read';
import { getPackages } from '@manypkg/get-packages';
import { padStart } from 'lodash';

const cwd = process.cwd();

function getCurrentDate() {
  const date = new Date();
  const day = padStart(date.getDate().toString(), 2, '0');
  const month = padStart((date.getMonth() + 1).toString(), 2, '0');
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

  return releasePlan;
}

async function main() {
  const releases = await getChangesetEntries();

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
