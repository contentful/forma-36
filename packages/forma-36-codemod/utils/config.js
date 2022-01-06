module.exports.getFormaImport = function getFormaImport() {
  return process.env.FORMA_IMPORT || '@contentful/forma-36-react-components';
};

module.exports.shouldSkipUpdateImport = function shouldSkipUpdateImport() {
  const value = Boolean(process.env.FORMA_SKIP_UPDATE_IMPORT);
  return value || false;
};
