import { defineTest } from 'jscodeshift/dist/testUtils';
import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const tests = [
  'color-tokens-to-new-tokens',
  'color-tokens-custom-import-name',
  'color-tokens-require',
  'color-tokens-no-import',
];

describe('Color-tokens-to-new-tokens', () => {
  tests.forEach((test) =>
    defineTest(
      __dirname,
      'color-tokens-to-new-tokens',
      null,
      `color-tokens/${test}`,
    ),
  );
});
