const fs = require('fs');
const prettier = require('prettier');

const cwd = process.cwd();

function getCurrentDate() {
  const date = new Date();
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const year = date.getFullYear();

  return `## ${day}-${month}-${year}`;
}

async function getContent(releases) {
  const releaseEntries = Object.entries(releases).map(
    ([displayName, changesets]) =>
      [displayName, '\n\n', ...changesets].join(''),
  );

  let content = [getCurrentDate(), ...releaseEntries].join('\n\n');

  content = await prettier.format(content, {
    parser: 'markdown',
    printWidth: 80,
    singleQuote: true,
    trailingComma: 'es5',
  });
  return content;
}

async function main() {
  const releases = JSON.parse(
    fs.readFileSync(`${cwd}/.changelogrc`).toString(),
  );
  if (!Object.entries(releases).length) return;

  const content = await getContent(releases);

  const changelogPath = `${cwd}/CHANGELOG.md`;
  const changelogPathWebsite = `${cwd}/packages/website/content/changelog.mdx`;
  const changelog = await fs.promises.readFile(changelogPath, 'utf8');

  const newChangelog = changelog.replace(
    '<!-- CHANGELOG:INSERT -->',
    `<!-- CHANGELOG:INSERT -->\n\n${content}`,
  );

  // write new changelog
  await fs.promises.writeFile(changelogPath, newChangelog);
  // Write changelog to website package
  await fs.promises.writeFile(
    changelogPathWebsite,
    newChangelog.replace('<!-- CHANGELOG:INSERT -->\n\n', ''),
  );

  // clean changelogrc file
  await fs.promises.writeFile(`${cwd}/.changelogrc`, '{}');
}

main();
