const { addImport } = require('./addImport');
const { removeComponentImport } = require('./removeComponentImport');

module.exports.changeImportWithComponentName = function changeImport(
  j,
  source,
  { from, to, componentName, outputComponentName },
) {
  let result = removeComponentImport(j, source, {
    componentName,
    importName: from,
  });

  const importResult = addImport(j, result, [
    j.template.statement([`import { ${outputComponentName} } from "${to}"`]),
  ]);
  return importResult.source;
};
