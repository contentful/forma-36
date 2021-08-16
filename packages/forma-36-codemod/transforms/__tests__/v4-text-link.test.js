'use strict';

const defineTest = require('jscodeshift/dist/testUtils').defineTest;

const tests = ['v4-text-link'];

describe('v4-text-link', () => {
  tests.forEach((test) => defineTest(__dirname, 'v4-text-link', null, test));
});
