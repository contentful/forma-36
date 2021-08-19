'use strict';

const defineTest = require('jscodeshift/dist/testUtils').defineTest;

const tests = ['v4-pill'];

describe('v4-pill', () => {
  tests.forEach((test) => defineTest(__dirname, 'v4-pill', null, test));
});
