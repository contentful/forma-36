'use strict';
import { beforeEach, describe, expect, it, vi } from 'vitest';
const runTest = require('jscodeshift/dist/testUtils').runTest;
globalThis.expect = expect;

describe('v6 codemods', () => {
  const tsxTests = ['v6/popover', 'v6/menu'];
  const tsTests = ['v6/skeleton'];
  beforeEach(() => {
    // Silence warnings we show on the transforms for cleaner tests
    // Comment this out if you want to check the warning messages
    console.warn = vi.fn();
  });

  tsxTests.forEach((test) => {
    describe(test, () => {
      it(`transforms correctly using "${test}" data`, () => {
        runTest(__dirname, test, null, `${test}`, { parser: 'tsx' });
      });
    });
  });
  tsTests.forEach((test) => {
    describe(test, () => {
      it(`transforms correctly using "${test}" data`, () => {
        runTest(__dirname, test, null, `${test}`, { parser: 'ts' });
      });
    });
  });
});
