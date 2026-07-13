const { Octokit } = require('octokit');

const owner = 'contentful';
const repo = 'forma-36';
const shouldWrite = process.argv.includes('--write');

const getAuth = () => {
  if (!process.env.GITHUB_TOKEN) {
    throw new Error('GITHUB_TOKEN is required to run the release smoke test.');
  }

  return `token ${process.env.GITHUB_TOKEN}`;
};

const assertCreateReleaseApi = (octokit) => {
  if (typeof octokit.rest?.repos?.createRelease !== 'function') {
    throw new Error('octokit.rest.repos.createRelease is not available.');
  }
};

const getDefaultBranchSha = async (octokit) => {
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

const deleteRelease = async (octokit, releaseId) => {
  if (!releaseId) {
    return;
  }

  await octokit.rest.repos.deleteRelease({
    owner,
    repo,
    release_id: releaseId,
  });
};

const deleteTag = async (octokit, tagName) => {
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

async function smokeTestReadOnly(octokit) {
  const { defaultBranch } = await getDefaultBranchSha(octokit);

  console.log(
    `Release smoke test passed for ${owner}/${repo} on ${defaultBranch}.`,
  );
}

async function smokeTestWrite(octokit) {
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

async function main() {
  const octokit = new Octokit({ auth: getAuth() });
  assertCreateReleaseApi(octokit);

  if (shouldWrite) {
    await smokeTestWrite(octokit);
    return;
  }

  await smokeTestReadOnly(octokit);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
