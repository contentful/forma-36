import path from 'node:path';
import { promises as fs } from 'node:fs';
import { execFileSync } from 'node:child_process';
import { pathToFileURL } from 'node:url';
import { getPackages } from '@manypkg/get-packages';
import { Octokit } from 'octokit';
import semver from 'semver';

const cwd = process.cwd();
const statePath = '.changeset/release-state.json';
const registry = 'https://npm.pkg.github.com/';
const registryEnv = {
  ...process.env,
  'npm_config_@contentful:registry': registry,
};

const run = (command, args, options = {}) =>
  (execFileSync(command, args, { encoding: 'utf8', ...options }) || '').trim();

const git = (...args) => run('git', args);

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

export async function releaseExists(octokit, tagName) {
  try {
    await octokit.rest.repos.getReleaseByTag({
      owner: 'contentful',
      repo: 'forma-36',
      tag: tagName,
    });
    return true;
  } catch (error) {
    if (error.status === 404) return false;
    throw error;
  }
}

export async function assertReleaseComplete(octokit, releases) {
  for (const { name, version } of releases) {
    const tag = `${name}@${version}`;
    if (!(await releaseExists(octokit, tag))) {
      throw new Error(
        `Release ${tag} is incomplete. Resume it from the version commit before starting another release (see RELEASES.md).`,
      );
    }
  }
}

async function readState() {
  try {
    return JSON.parse(await fs.readFile(statePath, 'utf8'));
  } catch (error) {
    if (error.code === 'ENOENT') return null;
    throw error;
  }
}

export async function getVersionedPackages(pkgs, readPrevious) {
  const releases = [];
  for (const pkg of pkgs) {
    if (pkg.packageJson.private) continue;
    const relativePath = path.relative(cwd, path.join(pkg.dir, 'package.json'));
    const previous = readPrevious(relativePath);
    if (!previous || JSON.parse(previous).version !== pkg.packageJson.version) {
      releases.push({
        name: pkg.packageJson.name,
        version: pkg.packageJson.version,
      });
    }
  }
  return releases;
}

function assertCurrentBranch(branch, gitCommand = git) {
  if (!branch || !/^[\w./-]+$/.test(branch)) {
    throw new Error('CIRCLE_BRANCH must identify the release branch.');
  }
  gitCommand('fetch', 'origin', branch);
  if (
    gitCommand('rev-parse', 'HEAD') !== gitCommand('rev-parse', 'FETCH_HEAD')
  ) {
    throw new Error(
      'The release checkout is not the latest branch commit. Run a release from the latest commit.',
    );
  }
}

export async function main({
  check = false,
  resume = false,
  runCommand = run,
  loadPackages = getPackages,
  loadState = readState,
  saveState = (state) => fs.writeFile(statePath, state),
  octokit = new Octokit({ auth: `token ${process.env.GITHUB_TOKEN}` }),
  makeRelease = createRelease,
} = {}) {
  const branch = process.env.CIRCLE_BRANCH;
  const git = (...args) => runCommand('git', args);
  const state = await loadState();

  if (check) {
    assertCurrentBranch(branch, git);
    if (state) await assertReleaseComplete(octokit, state.releases);
    return;
  }

  let releases;
  if (resume) {
    if (!state) throw new Error('No release state found at this commit.');
    const versionCommit = git('log', '-1', '--format=%H', '--', statePath);
    if (git('rev-parse', 'HEAD') !== versionCommit) {
      throw new Error(
        `Resume must run from the exact version commit ${versionCommit}.`,
      );
    }
    releases = state.releases;
  } else {
    if (state) await assertReleaseComplete(octokit, state.releases);
    const { packages } = await loadPackages(cwd);
    releases = await getVersionedPackages(packages, (file) =>
      git('ls-tree', '--name-only', 'HEAD', '--', file)
        ? git('show', `HEAD:${file}`)
        : null,
    );
    if (releases.length) {
      for (const { name, version } of releases) {
        const tagName = `${name}@${version}`;
        if (git('ls-remote', '--tags', 'origin', `refs/tags/${tagName}`)) {
          throw new Error(
            `Tag ${tagName} already exists. Reconcile the previous release before versioning again.`,
          );
        }
      }
      await saveState(`${JSON.stringify({ releases }, null, 2)}\n`);
    }
    git('add', '.');
    runCommand('pnpm', ['pretty:quick'], { stdio: 'inherit' });
    if (git('diff', '--cached', '--name-only')) {
      const source = git('rev-parse', '--short', 'HEAD');
      git(
        'commit',
        '-m',
        `docs(changelog): add changelogs for ${source} [skip ci]`,
      );
      git('push', 'origin', `HEAD:refs/heads/${branch}`);
    } else {
      assertCurrentBranch(branch, git);
    }
  }

  if (!releases.length) return;

  // The scoped override applies only to publication, not installs or lockfiles.
  runCommand('pnpm', ['exec', 'changeset', 'publish', '--no-git-tag'], {
    env: registryEnv,
    stdio: 'inherit',
  });

  const { packages } = await loadPackages(cwd);
  const commit = git('rev-parse', 'HEAD');
  for (const release of releases) {
    const tagName = `${release.name}@${release.version}`;
    const pkg = packages.find((item) => item.packageJson.name === release.name);
    if (!pkg || pkg.packageJson.version !== release.version) {
      throw new Error(
        `Package version does not match release state: ${tagName}`,
      );
    }
    const published = runCommand(
      'npm',
      ['view', tagName, 'version', '--json'],
      {
        env: registryEnv,
      },
    );
    if (JSON.parse(published) !== release.version) {
      throw new Error(`Registry did not confirm ${tagName}.`);
    }
    const remote = git('ls-remote', '--tags', 'origin', `refs/tags/${tagName}`);
    if (remote && remote.split(/\s/)[0] !== commit) {
      throw new Error(
        `Tag ${tagName} already points to a different commit; reconcile it manually.`,
      );
    }
    if (!remote) {
      const local = git('tag', '--list', tagName);
      if (local && git('rev-list', '-n', '1', tagName) !== commit) {
        throw new Error(`Local tag ${tagName} points to a different commit.`);
      }
      if (!local) git('tag', tagName, commit);
      git('push', 'origin', `refs/tags/${tagName}`);
    }
    if (!(await releaseExists(octokit, tagName))) {
      await makeRelease(octokit, { pkg, tagName });
    }
  }
}

if (
  process.argv[1] &&
  import.meta.url === pathToFileURL(process.argv[1]).href
) {
  main({
    check: process.argv.includes('--check'),
    resume: process.argv.includes('--resume'),
  }).catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
}
