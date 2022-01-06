const addImports = require('jscodeshift-add-imports');

module.exports.addImport = function addImport(j, source, imports) {
  const root = j(source);
  const result = addImports(root, imports);
  return {
    result,
    source: root.toSource(),
  };
};
