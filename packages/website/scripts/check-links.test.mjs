import assert from 'node:assert/strict';
import test from 'node:test';

import { shouldIgnoreRateLimit } from './check-links.mjs';

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
