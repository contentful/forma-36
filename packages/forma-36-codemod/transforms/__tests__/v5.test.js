'use strict';

const defineTest = require('jscodeshift/dist/testUtils').defineTest;

describe('v5 codemods', () => {
  const tests = ['v5/icons'];

  beforeEach(() => {
    // Silence warnings we show on the transforms for cleaner tests
    // Comment this out if you want to check the warning messages
    console.warn = jest.fn();
  });

  tests.forEach((test) => defineTest(__dirname, test, null, `${test}`));
});
