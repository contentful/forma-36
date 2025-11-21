const fs = require('fs');
const assembleReleasePlan =
  require('@changesets/assemble-release-plan').default;
const { read } = require('@changesets/config');
const { readPreState } = require('@changesets/pre');
const readChangesets = require('@changesets/read').default;
const { getPackages } = require('@manypkg/get-packages');

const cwd = process.cwd();

// Umbrella package
const componentsPkg = '@contentful/f36-components';

// Packages we don't want to have on changelog
const ignorePkgs = [
  '@contentful/f36-cdn',
  '@contentful/f36-i18n-utils',
  '@contentful/f36-website',
  '@contentful/f36-docs-utils',
  '@contentful/f36-ai-components',
];

// Format package names as Start Case
function startCase(string) {
  const toStartCase = (s) => s.charAt(0).toUpperCase() + s.substring(1);
  return string
    .split(/\W/g)
    .reduce((str, x) => `${str.trim()} ${toStartCase(x)}`, '')
    .trim();
}
function getPackageName(name) {
  return startCase(name.replace('@contentful/', ''));
}

// Formats displayName for each release and separate changesets
function getReleaseSummary(changesets, release) {
  const formattedChangesets = release.changesets.map((changeset) => {
    const { summary } = changesets.find((cs) => cs.id === changeset) ?? {};
    const changes = summary.split('\n');
    return changes
      .map((change) =>
        !change || change?.trim().startsWith('-') ? change : `- ${change}\n`,
      )
      .join('');
  });

  const subPackageName = `**${getPackageName(release.name)}** \`v${
    release.newVersion
  }\``;

  const rootPackageName = `\`${componentsPkg}@${release.newVersion}\``;
  const displayName =
    release.name === componentsPkg ? rootPackageName : subPackageName;

  return {
    ...release,
    changesets: formattedChangesets,
    displayName: displayName.replace(/,\s*$/, ''),
  };
}

// Get changes from changesets and returns the releases with displayName and the changes grouped
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

  const releases = releasePlan.releases
    .filter((release) => release.changesets.length > 0) // Remove releases without changesets
    .filter((release) => !ignorePkgs.includes(release.name)) // Remove ignored packages
    .map((release) => getReleaseSummary(releasePlan.changesets, release))
    .sort((a, b) => {
      // Sort umbrella package at the top, and others alphabetically
      if (a.name === componentsPkg) return -1;
      if (b.name === componentsPkg) return 1;
      return a.name < b.name ? -1 : 1;
    });

  return releases;
}

async function main() {
  const releases = await getChangesetEntries();
  if (!releases.length) return;

  const content =
    JSON.parse(fs.readFileSync(`${cwd}/.changelogrc`).toString()) || {};

  releases.forEach(({ displayName, changesets }) => {
    const prevState = content[displayName] || [];
    // eslint-disable-next-line no-undef -- @todo: fix this
    content[displayName] = [...new Set([...prevState, ...changesets])];
  });

  // write to rc file
  fs.writeFileSync(`${cwd}/.changelogrc`, JSON.stringify(content));
}

main();
