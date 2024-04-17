module.exports.getImport = function getImport(packageName = 'f36-components') {
  return process.env.FORMA_IMPORT || `@contentful/${packageName}`;
};
