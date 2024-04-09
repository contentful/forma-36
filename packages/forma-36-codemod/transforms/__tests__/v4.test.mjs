import { defineInlineTest, defineTest } from 'jscodeshift/dist/testUtils';
import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { jest } from '@jest/globals';

const __dirname = dirname(fileURLToPath(import.meta.url));

describe('v4 codemods', () => {
  const tests = [
    'v4-inline-entry-card',
    'v4-badge',
    'v4-button',
    'v4-card',
    'v4-checkbox',
    'v4-entity-list',
    'v4-flex',
    'v4-form',
    'v4-grid',
    'v4-icon-button',
    'v4-icon',
    'v4-list',
    'v4-modal',
    'v4-note',
    'v4-pill',
    'v4-radio',
    'v4-select',
    'v4-skeleton',
    'v4-spinner',
    'v4-table',
    'v4-text-field',
    'v4-text-inputs',
    'v4-text-link',
    'v4-tooltip',
    'v4-typography',
    'v4-notification',
    'v4-asset-card',
    'v4-entry-card',
    'v4-helptext',
  ];

  beforeEach(() => {
    // Silence warnings we show on the transforms for cleaner tests
    // Comment this out if you want to check the warning messages
    console.warn = jest.fn();
  });

  tests.forEach((test) => defineTest(__dirname, test, null, `v4/${test}`));

  describe('TextLink', () => {
    const templateWithNoTextLink = `
  import { Button } from "@contentful/forma-36-react-components";

  <Button>click me</Button>
  `;

    defineInlineTest(
      import('../v4-text-link.mjs').then((mod) => mod.default),
      {},
      templateWithNoTextLink,
      templateWithNoTextLink,
      'does nothing if no TextLink is found',
    );
  });
});
