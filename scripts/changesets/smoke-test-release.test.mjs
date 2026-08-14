import { describe, expect, it, vi } from 'vitest';
import { main } from './smoke-test-release.mjs';

const createOctokitMock = () => ({
  rest: {
    repos: {
      get: vi.fn().mockResolvedValue({ data: { default_branch: 'main' } }),
      getBranch: vi
        .fn()
        .mockResolvedValue({ data: { commit: { sha: 'abc123' } } }),
      createRelease: vi.fn().mockResolvedValue({ data: { id: 42 } }),
      deleteRelease: vi.fn().mockResolvedValue(undefined),
    },
    git: {
      createRef: vi.fn().mockResolvedValue(undefined),
      deleteRef: vi.fn().mockResolvedValue(undefined),
    },
  },
});

describe('smoke-test-release', () => {
  it('runs the read-only path without creating or deleting resources', async () => {
    const octokit = createOctokitMock();
    const consoleLog = vi.spyOn(console, 'log').mockImplementation(() => {});

    try {
      await main({ octokit, shouldWrite: false });

      expect(consoleLog).toHaveBeenCalledWith(
        'Release smoke test passed for contentful/forma-36 on main.',
      );
    } finally {
      consoleLog.mockRestore();
    }

    expect(octokit.rest.repos.get).toHaveBeenCalledWith({
      owner: 'contentful',
      repo: 'forma-36',
    });
    expect(octokit.rest.repos.getBranch).toHaveBeenCalledWith({
      owner: 'contentful',
      repo: 'forma-36',
      branch: 'main',
    });
    expect(octokit.rest.git.createRef).not.toHaveBeenCalled();
    expect(octokit.rest.repos.createRelease).not.toHaveBeenCalled();
    expect(octokit.rest.repos.deleteRelease).not.toHaveBeenCalled();
    expect(octokit.rest.git.deleteRef).not.toHaveBeenCalled();
  });

  it('runs the write path and cleans up the temporary release and tag', async () => {
    const octokit = createOctokitMock();
    const consoleLog = vi.spyOn(console, 'log').mockImplementation(() => {});

    try {
      await main({ octokit, shouldWrite: true });

      expect(consoleLog).toHaveBeenCalledWith(
        'Draft release smoke test passed for contentful/forma-36.',
      );
    } finally {
      consoleLog.mockRestore();
    }

    expect(octokit.rest.git.createRef).toHaveBeenCalledWith({
      owner: 'contentful',
      repo: 'forma-36',
      ref: expect.stringMatching(/^refs\/tags\/release-smoke-test-/),
      sha: 'abc123',
    });
    expect(octokit.rest.repos.createRelease).toHaveBeenCalledWith({
      owner: 'contentful',
      repo: 'forma-36',
      name: expect.stringMatching(/^release-smoke-test-/),
      tag_name: expect.stringMatching(/^release-smoke-test-/),
      target_commitish: 'main',
      body: 'Temporary draft release created by the Octokit smoke test.',
      draft: true,
      prerelease: true,
    });
    expect(octokit.rest.repos.deleteRelease).toHaveBeenCalledWith({
      owner: 'contentful',
      repo: 'forma-36',
      release_id: 42,
    });
    expect(octokit.rest.git.deleteRef).toHaveBeenCalledWith({
      owner: 'contentful',
      repo: 'forma-36',
      ref: expect.stringMatching(/^tags\/release-smoke-test-/),
    });
  });

  it('cleans up the tag when release creation fails', async () => {
    const octokit = createOctokitMock();

    octokit.rest.repos.createRelease.mockRejectedValue(new Error('failed'));

    await expect(main({ octokit, shouldWrite: true })).rejects.toThrow('failed');

    expect(octokit.rest.repos.deleteRelease).not.toHaveBeenCalled();
    expect(octokit.rest.git.deleteRef).toHaveBeenCalled();
  });

  it('ignores a missing tag during cleanup', async () => {
    const octokit = createOctokitMock();
    octokit.rest.git.deleteRef.mockRejectedValue({ status: 404 });

    await expect(main({ octokit, shouldWrite: true })).resolves.toBeUndefined();
  });

  it('propagates non-404 tag cleanup errors', async () => {
    const octokit = createOctokitMock();
    const error = { status: 500, message: 'GitHub unavailable' };
    octokit.rest.git.deleteRef.mockRejectedValue(error);

    await expect(main({ octokit, shouldWrite: true })).rejects.toBe(error);
  });

  it('fails when the GitHub token is missing', async () => {
    const originalToken = process.env.GITHUB_TOKEN;
    delete process.env.GITHUB_TOKEN;

    try {
      await expect(main()).rejects.toThrow(
        'GITHUB_TOKEN is required to run the release smoke test.',
      );
    } finally {
      if (originalToken === undefined) {
        delete process.env.GITHUB_TOKEN;
      } else {
        process.env.GITHUB_TOKEN = originalToken;
      }
    }
  });
});
