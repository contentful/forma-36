'use strict';

const defineTest = require('jscodeshift/dist/testUtils').defineTest;
const defineInlineTest = require('jscodeshift/dist/testUtils').defineInlineTest;

const transform = require('../v4-text-link');

const tests = ['v4-text-link'];

describe('v4-text-link', () => {
  tests.forEach((test) => defineTest(__dirname, 'v4-text-link', null, test));

  const templateWithNoTextLink = `
  import { Button } from "@contentful/forma-36-react-components";

  <Button>click me</Button>
  `;

  defineInlineTest(
    transform,
    {},
    templateWithNoTextLink,
    templateWithNoTextLink,
    'does nothing if no TextLink is found',
  );
});
