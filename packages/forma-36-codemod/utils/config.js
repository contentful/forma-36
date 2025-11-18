/**
 * Get the package name that should be looked for on source code, if FORMA_IMPORT or params is not set, it will default to \@contentful/f36-components
 * @param {string} packageName - package name to getImport for
 * @returns the package name that should be looked for on source code.
 */
module.exports.getImport = function getImport(packageName = 'f36-components') {
  return process.env.FORMA_IMPORT || `@contentful/${packageName}`;
};

/**
 * Checks if import should be updated
 * @returns true if import updated should be skipped, false otherwise
 */
module.exports.shouldSkipUpdateImport = function shouldSkipUpdateImport() {
  const value = Boolean(process.env.FORMA_SKIP_UPDATE_IMPORT);
  return value || false;
};
