import { pathToFileURL } from 'node:url';
import { Octokit } from 'octokit';

const owner = 'contentful';
const repo = 'forma-36';

export const getAuth = () => {
  if (!process.env.GITHUB_TOKEN) {
    throw new Error('GITHUB_TOKEN is required to run the release smoke test.');
  }

  return `token ${process.env.GITHUB_TOKEN}`;
};

export const assertCreateReleaseApi = (octokit) => {
  if (typeof octokit.rest?.repos?.createRelease !== 'function') {
    throw new Error('octokit.rest.repos.createRelease is not available.');
  }
};

export const getDefaultBranchSha = async (octokit) => {
  const { data: repoData } = await octokit.rest.repos.get({ owner, repo });
  const { data: branchData } = await octokit.rest.repos.getBranch({
    owner,
    repo,
    branch: repoData.default_branch,
  });

  return {
    defaultBranch: repoData.default_branch,
    sha: branchData.commit.sha,
  };
};

export const deleteRelease = async (octokit, releaseId) => {
  if (!releaseId) {
    return;
  }

  await octokit.rest.repos.deleteRelease({
    owner,
    repo,
    release_id: releaseId,
  });
};

export const deleteTag = async (octokit, tagName) => {
  if (!tagName) {
    return;
  }

  try {
    await octokit.rest.git.deleteRef({
      owner,
      repo,
      ref: `tags/${tagName}`,
    });
  } catch (error) {
    if (error.status !== 404) {
      throw error;
    }
  }
};

export async function smokeTestReadOnly(octokit) {
  const { defaultBranch } = await getDefaultBranchSha(octokit);

  console.log(
    `Release smoke test passed for ${owner}/${repo} on ${defaultBranch}.`,
  );
}

export async function smokeTestWrite(octokit) {
  const timestamp = new Date().toISOString().replace(/[-:.TZ]/g, '');
  const tagName = `release-smoke-test-${timestamp}`;
  let releaseId;

  try {
    const { defaultBranch, sha } = await getDefaultBranchSha(octokit);

    await octokit.rest.git.createRef({
      owner,
      repo,
      ref: `refs/tags/${tagName}`,
      sha,
    });

    const { data: release } = await octokit.rest.repos.createRelease({
      owner,
      repo,
      name: tagName,
      tag_name: tagName,
      target_commitish: defaultBranch,
      body: 'Temporary draft release created by the Octokit smoke test.',
      draft: true,
      prerelease: true,
    });

    releaseId = release.id;

    console.log(`Draft release smoke test passed for ${owner}/${repo}.`);
  } finally {
    await deleteRelease(octokit, releaseId);
    await deleteTag(octokit, tagName);
  }
}

export async function main({
  octokit = new Octokit({ auth: getAuth() }),
  shouldWrite = process.argv.includes('--write'),
} = {}) {
  assertCreateReleaseApi(octokit);

  if (shouldWrite) {
    await smokeTestWrite(octokit);
    return;
  }

  await smokeTestReadOnly(octokit);
}

if (
  process.argv[1] &&
  import.meta.url === pathToFileURL(process.argv[1]).href
) {
  main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
}
