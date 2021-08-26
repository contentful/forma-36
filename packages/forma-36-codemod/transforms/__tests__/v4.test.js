'use strict';

const defineTest = require('jscodeshift/dist/testUtils').defineTest;
const defineInlineTest = require('jscodeshift/dist/testUtils').defineInlineTest;

describe('v4 codemods', () => {
  const tests = [
    'v4-badge',
    'v4-flex',
    'v4-list',
    'v4-note',
    'v4-pill',
    'v4-text-link',
  ];

  tests.forEach((test) => defineTest(__dirname, test, null, test));

  describe('TextLink', () => {
    const templateWithNoTextLink = `
  import { Button } from "@contentful/forma-36-react-components";

  <Button>click me</Button>
  `;

    defineInlineTest(
      require('../v4-text-link'),
      {},
      templateWithNoTextLink,
      templateWithNoTextLink,
      'does nothing if no TextLink is found',
    );
  });
});
