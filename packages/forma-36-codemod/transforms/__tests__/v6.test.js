'use strict';
const defineTest = require('jscodeshift/dist/testUtils').defineTest;

describe('v6 codemods', () => {
  const tsxTests = ['v6/popover', 'v6/menu'];
  const tsTests = ['v6/skeleton'];
  beforeEach(() => {
    // Silence warnings we show on the transforms for cleaner tests
    // Comment this out if you want to check the warning messages
    console.warn = jest.fn();
  });

  tsxTests.forEach((test) =>
    defineTest(__dirname, test, null, `${test}`, { parser: 'tsx' }),
  );
  tsTests.forEach((test) =>
    defineTest(__dirname, test, null, `${test}`, { parser: 'ts' }),
  );
});
