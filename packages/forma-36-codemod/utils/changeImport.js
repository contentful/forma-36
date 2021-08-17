const { addImport } = require('./addImport');
const { removeComponentImport } = require('./removeComponentImport');

module.exports.changeImport = function changeImport(
  j,
  source,
  { from, to, componentName },
) {
  let result = removeComponentImport(j, source, {
    componentName,
    importName: from,
  });

  const importResult = addImport(j, result, [
    j.template.statement([`import { ${componentName} } from "${to}"`]),
  ]);
  return importResult.source;
};
