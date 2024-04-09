import { addImport } from './addImport.mjs';
import { removeComponentImport } from './removeComponentImport.mjs';

export const changeImport = function changeImport(
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
