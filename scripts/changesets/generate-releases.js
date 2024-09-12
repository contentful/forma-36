const path = require('path');
const fs = require('fs');
const childProcess = require('child_process');
const { getPackages } = require('@manypkg/get-packages');
const { Octokit } = require('octokit');
const semver = require('semver');

const cwd = process.cwd();

// Create release on github
const createRelease = async (octokit, { pkg, tagName }) => {
  const changelogPath = path.join(pkg.dir, 'CHANGELOG.md');

  const changelog = await fs.promises.readFile(changelogPath, 'utf8');
  const changelogArr = changelog.split('\n');
  let releaseNotes = [];
  // Get release notes from changelog
  for (const line of changelogArr) {
    if (line.match(/^#{3}\s/)) {
      releaseNotes.push(line);
    } else if (line.match(/^#{1,3}\s/) && releaseNotes.length > 0) {
      break;
    } else if (releaseNotes.length > 0) {
      releaseNotes.push(line);
    }
  }

  // Check if it's a prerelease
  const prereleaseParts =
    semver.prerelease(tagName.replace(`${pkg.packageJson.name}@`, '')) || [];

  // Create release on github
  await octokit.rest.repos.createRelease({
    owner: 'contentful',
    repo: 'forma-36',
    name: tagName,
    tag_name: tagName,
    body: releaseNotes.join('\n'),
    prerelease: prereleaseParts.length > 0,
  });
};

// Get only packages that have a new version published
const getReleasedPackages = async (csOutput, pkgs) => {
  const tagNameRegex = /New tag:\s+(@contentful\/[^@]+)@([^\s]+)/;
  return csOutput.split('\n').reduce((acc, line) => {
    const match = line.match(tagNameRegex);
    if (match === null) {
      return acc;
    }
    const tagName = [match[1], match[2]].join('@');
    const pkg = pkgs.find((p) => p.packageJson?.name === match[1]);
    return [...acc, { tagName, pkg }];
  }, []);
};

async function main() {
  const env = process.env;
  const octokit = new Octokit({
    auth: `token ${env.GITHUB_TOKEN}`,
  });
  const isMain = env.CIRCLE_BRANCH === 'main';

  // Run changesets publish and get stdout
  const csOutput = childProcess.execSync('npx changeset publish').toString();
  console.log(csOutput);

  const commitMessage = isMain
    ? 'docs(changelog): add changelogs for'
    : 'chore: bump package versions for';

  const gitPushCommand = `git add . && npm run-script pretty:quick
  git diff --staged --quiet || git commit -m "${commitMessage} $(git rev-parse --short HEAD) [skip ci]" && git push origin ${env.CIRCLE_BRANCH} --follow-tags`;

  // Push updated packages to github with tags
  console.log(childProcess.execSync(gitPushCommand));

  // Only create releases on main branch
  if (isMain) {
    const { packages: pkgs } = await getPackages(cwd);
    const releasedPkgs = await getReleasedPackages(csOutput, pkgs);

    // Create release for each published package
    for (const pkg of releasedPkgs) {
      await createRelease(octokit, pkg);
    }
  }
}

main();
