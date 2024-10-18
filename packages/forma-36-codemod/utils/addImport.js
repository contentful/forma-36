const addImports = require('jscodeshift-add-imports');

/**
 * Adds imports to the source code
 * @param {*} j - jscodeshift API
 * @param {*} source - original source code
 * @param {*} imports - array of imports to add
 * @returns source with added imports
 */
module.exports.addImport = function addImport(j, source, imports) {
  const root = j(source);
  const result = addImports(root, imports);
  return {
    result,
    source: root.toSource(),
  };
};
