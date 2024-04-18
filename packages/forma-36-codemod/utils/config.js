module.exports.getImport = function getImport(packageName = 'f36-components') {
  return process.env.FORMA_IMPORT || `@contentful/${packageName}`;
};

module.exports.shouldSkipUpdateImport = function shouldSkipUpdateImport() {
  const value = Boolean(process.env.FORMA_SKIP_UPDATE_IMPORT);
  return value || false;
};
