'use strict';

const defineTest = require('jscodeshift/dist/testUtils').defineTest;

const tests = ['v4-note'];

describe('v4-note', () => {
  tests.forEach((test) => defineTest(__dirname, 'v4-note', null, test));
});
