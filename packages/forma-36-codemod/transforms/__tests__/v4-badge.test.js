'use strict';

const defineTest = require('jscodeshift/dist/testUtils').defineTest;

const tests = ['v4-badge'];

describe('v4-badge', () => {
  tests.forEach((test) => defineTest(__dirname, 'v4-badge', null, test));
});
