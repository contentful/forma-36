'use strict';

const tests = [
  'color-tokens-to-new-tokens',
  'color-tokens-custom-import-name',
  'color-tokens-require',
  'color-tokens-no-import',
];

const defineTest = require('jscodeshift/dist/testUtils').defineTest;

describe('Color-tokens-to-new-tokens', () => {
  tests.forEach((test) =>
    defineTest(__dirname, 'color-tokens-to-new-tokens', null, test),
  );
});
