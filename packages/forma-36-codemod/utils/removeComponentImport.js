/**
 * Removes the import of a component from a file, it removes the entire import statement if the componentName is the only import from that package.
 * @param {*} j - jscodeshift api
 * @param {*} source - original source code
 * @param {{importName: string, componentName: string}} param - Object with importName and componentName
 * @returns updated source code with the import updated or removed.
 */
module.exports.removeComponentImport = function removeComponentImport(
  j,
  source,
  { importName, componentName },
) {
  return j(source)
    .find(j.ImportDeclaration, { source: { value: importName } })
    .forEach((dpath) => {
      const specifiers = j(dpath).find(j.ImportSpecifier);

      specifiers.forEach((spath) => {
        if (spath.value.imported.name === componentName) {
          if (specifiers.length === 1) {
            j(dpath).remove();
          } else {
            j(spath).remove();
          }
        }
      });
    })
    .toSource();
};
