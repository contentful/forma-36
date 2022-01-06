const { addImport } = require('./addImport');
const { removeComponentImport } = require('./removeComponentImport');

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
