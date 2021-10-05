'use strict';

const defineTest = require('jscodeshift/dist/testUtils').defineTest;
const defineInlineTest = require('jscodeshift/dist/testUtils').defineInlineTest;

describe('v4 codemods', () => {
  const tests = [
    'v4-badge',
    'v4-button',
    'v4-icon-button',
    'v4-flex',
    'v4-list',
    'v4-note',
    'v4-pill',
    'v4-text-link',
    'v4-spinner',
    'v4-modal',
    'v4-typography',
    'v4-table',
    'v4-grid',
    'v4-skeleton',
    'v4-tooltip',
    'v4-icon',
    'v4-text-inputs',
    'v4-select',
    'v4-checkbox',
    'v4-form',
    'v4-radio',
  ];

  beforeEach(() => {
    // Silence warnings we show on the transforms for cleaner tests
    // Comment this out if you want to check the warning messages
    console.warn = jest.fn();
  });

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
