import addImports from 'jscodeshift-add-imports';

export const addImport = function addImport(j, source, imports) {
  const root = j(source);
  const result = addImports(root, imports);
  return {
    result,
    source: root.toSource(),
  };
};
