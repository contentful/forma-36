'use strict';

const tests = ['color-tokens-to-new-tokens', 'color-tokens-custom-import-name'];

const defineTest = require('jscodeshift/dist/testUtils').defineTest;

describe('Color-tokens-to-new-tokens', () => {
  tests.forEach((test) =>
    defineTest(__dirname, 'Color-tokens-to-new-tokens', null, test),
  );
});
