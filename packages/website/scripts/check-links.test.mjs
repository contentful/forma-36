import assert from 'node:assert/strict';
import test from 'node:test';

import { getExcludedKeywords, shouldIgnoreRateLimit } from './check-links.mjs';

function resultFor(url, statusCode, broken = true) {
  return {
    broken,
    brokenReason: `HTTP_${statusCode}`,
    http: {
      response: {
        statusCode,
        url,
      },
    },
    url: {
      original: url,
      resolved: url,
    },
  };
}

test('ignores a 429 from contentful.com', () => {
  assert.equal(
    shouldIgnoreRateLimit(resultFor('https://contentful.com/docs', 429)),
    true,
  );
});

test('ignores a 429 from a contentful.com subdomain', () => {
  assert.equal(
    shouldIgnoreRateLimit(resultFor('https://www.contentful.com/docs', 429)),
    true,
  );
});

test('does not ignore other status codes from contentful.com', () => {
  assert.equal(
    shouldIgnoreRateLimit(resultFor('https://contentful.com/docs', 404)),
    false,
  );
});

test('does not ignore 429 responses from other domains', () => {
  assert.equal(
    shouldIgnoreRateLimit(resultFor('https://example.com/docs', 429)),
    false,
  );
});

test('uses the default exclusions when the environment variable is unset', () => {
  assert.deepEqual(getExcludedKeywords(undefined), [
    'https://medium.com/contentful-design',
    'https://github.com/contentful/forma-36',
    'https://www.figma.com/@contentful',
    'https://react-hook-form.com',
  ]);
});

test('reads comma-separated exclusions from the environment variable', () => {
  assert.deepEqual(
    getExcludedKeywords('https://example.com, https://another.example.com'),
    ['https://example.com', 'https://another.example.com'],
  );
});
