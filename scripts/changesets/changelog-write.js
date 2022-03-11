const fs = require('fs');

const cwd = process.cwd();

async function main() {
  const content = fs.readFileSync(`${cwd}/.changelogrc`).toString();
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
}

main();
