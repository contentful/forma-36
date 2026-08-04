'use strict';

import { beforeEach, describe, expect, it, vi } from 'vitest';

const runTest = require('jscodeshift/dist/testUtils').runTest;
globalThis.expect = expect;

describe('v5 codemods', () => {
  const tests = ['v5/icons'];

  beforeEach(() => {
    // Silence warnings we show on the transforms for cleaner tests
    // Comment this out if you want to check the warning messages
    console.warn = vi.fn();
  });

  tests.forEach((test) => {
    describe(test, () => {
      it(`transforms correctly using "${test}" data`, () => {
        runTest(__dirname, test, null, `${test}`);
      });
    });
  });
});
