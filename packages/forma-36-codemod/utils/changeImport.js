const { addImport } = require('./addImport');
const { removeComponentImport } = require('./removeComponentImport');

/**
 * Updates the import statement in the source code
 * @param {*} j - jscodeshift API
 * @param {*} source - original source code
 * @param {{from: string, to: string, componentName: string, outputComponentName: string}} params - Object with old and new import paths and component names
 * @returns source with updated import statement
 */
module.exports.changeImport = function changeImport(
  j,
  source,
  { from, to, componentName, outputComponentName },
) {
  let result = removeComponentImport(j, source, {
    componentName,
    importName: from,
  });

  const importResult = addImport(j, result, [
    j.template.statement([
      `import { ${
        outputComponentName ? outputComponentName : componentName
      } } from "${to}"`,
    ]),
  ]);

  return importResult.source;
};
