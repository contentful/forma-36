'use strict';

import { beforeEach, describe, expect, it, vi } from 'vitest';

const defineTest = require('jscodeshift/dist/testUtils').defineTest;

globalThis.describe = describe;
globalThis.it = it;
globalThis.expect = expect;

describe('v7 codemods', () => {
  const tsxTests = ['v7/modal'];
  const tsTests = [];
  beforeEach(() => {
    // Silence warnings we show on the transforms for cleaner tests
    // Comment this out if you want to check the warning messages
    console.warn = vi.fn();
  });

  tsxTests.forEach((test) =>
    defineTest(__dirname, test, null, `${test}`, { parser: 'tsx' }),
  );
  tsTests.forEach((test) =>
    defineTest(__dirname, test, null, `${test}`, { parser: 'ts' }),
  );
});
