'use strict';

const defineTest = require('jscodeshift/dist/testUtils').defineTest;

const tests = ['v4-flex'];

describe('v4-flex', () => {
  tests.forEach((test) => defineTest(__dirname, 'v4-flex', null, test));
});
