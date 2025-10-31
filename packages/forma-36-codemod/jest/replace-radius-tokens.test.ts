const defineTest = require('jscodeshift/dist/testUtils').defineTest;

/**
 * Runs the test fixture for the replace-shape-radius-tokens transform.
 * 
 * This will look for matching files under:
 * __testfixtures__/replace-shape-radius-tokens/basic.input.js
 * __testfixtures__/replace-shape-radius-tokens/basic.output.js
 */
defineTest(
  __dirname,
  'replace-shape-radius-tokens',
  null,
  'replace-shape-radius-tokens/basic',
);
