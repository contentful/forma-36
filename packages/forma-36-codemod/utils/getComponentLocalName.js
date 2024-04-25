/**
 * Gets the local name of a component that is imported from the importName package
 * @param {*} j - jscodeshift API
 * @param {*} source - original source code
 * @param {{importName: string, componentName: string}} param - Object with importName and componentName
 * @returns name used locally by the component
 */
module.exports.getComponentLocalName = function getComponentLocalName(
  j,
  source,
  { importName, componentName },
) {
  let finalName = '';

  j(source)
    .find(j.ImportDeclaration, { source: { value: importName } })
    .forEach((path) => {
      j(path)
        .find(j.ImportSpecifier, { imported: { name: componentName } })
        .forEach((path) => {
          finalName = path.value.local.name;
        });
    });

  return finalName;
};
