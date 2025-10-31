const defineTest = require('jscodeshift/dist/testUtils').defineTest;

/**
 * Runs the test fixture for the replace-shape-radius-tokens transform.
 * This assumes a flat test fixture structure under __testfixtures__/.
 */
defineTest(
  __dirname,
  'replace-shape-radius-tokens',
  null,
  'replace-shape-radius-tokens',
);
