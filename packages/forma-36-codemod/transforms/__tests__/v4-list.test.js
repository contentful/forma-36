'use strict';

const defineTest = require('jscodeshift/dist/testUtils').defineTest;

const tests = ['v4-list'];

describe('v4-list', () => {
  tests.forEach((test) => defineTest(__dirname, 'v4-list', null, test));
});
