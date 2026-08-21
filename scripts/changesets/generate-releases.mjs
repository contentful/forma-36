import path from 'node:path';
import { promises as fs } from 'node:fs';
import { execSync } from 'node:child_process';
import { pathToFileURL } from 'node:url';
import { getPackages } from '@manypkg/get-packages';
import { Octokit } from 'octokit';
import semver from 'semver';

const cwd = process.cwd();

export const getReleaseNotes = (changelog) => {
  const changelogArr = changelog.split('\n');
  const releaseNotes = [];

  for (const line of changelogArr) {
    if (line.match(/^#{3}\s/)) {
      releaseNotes.push(line);
    } else if (line.match(/^#{1,3}\s/) && releaseNotes.length > 0) {
      break;
    } else if (releaseNotes.length > 0) {
      releaseNotes.push(line);
    }
  }

  return releaseNotes.join('\n');
};

export const isPrerelease = ({ pkg, tagName }) => {
  const prereleaseParts =
    semver.prerelease(tagName.replace(`${pkg.packageJson.name}@`, '')) || [];

  return prereleaseParts.length > 0;
};

// Create release on github
export const createRelease = async (octokit, { pkg, tagName }) => {
  const changelogPath = path.join(pkg.dir, 'CHANGELOG.md');

  const changelog = await fs.readFile(changelogPath, 'utf8');

  // Create release on github
  await octokit.rest.repos.createRelease({
    owner: 'contentful',
    repo: 'forma-36',
    name: tagName,
    tag_name: tagName,
    body: getReleaseNotes(changelog),
    prerelease: isPrerelease({ pkg, tagName }),
  });
};

// Get only packages that have a new version published
export const getReleasedPackages = async (csOutput, pkgs) => {
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

export async function main() {
  const env = process.env;
  const octokit = new Octokit({
    auth: `token ${env.GITHUB_TOKEN}`,
  });

  // Run changesets publish and get stdout
  const csOutput = execSync('pnpm exec changeset publish').toString();
  console.log(csOutput);

  const gitPushCommand = `git add . && pnpm pretty:quick
  git diff --staged --quiet || git commit -m "docs(changelog): add changelogs for $(git rev-parse --short HEAD) [skip ci]" && git push origin ${env.CIRCLE_BRANCH} --follow-tags`;

  // Push updated packages to github with tags
  console.log(execSync(gitPushCommand));

  const { packages: pkgs } = await getPackages(cwd);
  const releasedPkgs = await getReleasedPackages(csOutput, pkgs);

  // Create release for each published package
  for (const pkg of releasedPkgs) {
    await createRelease(octokit, pkg);
  }
}

if (
  process.argv[1] &&
  import.meta.url === pathToFileURL(process.argv[1]).href
) {
  main();
}
