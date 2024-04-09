import { getComponentLocalName, changeImport } from '../utils/index.mjs';
import { getFormaImport, shouldSkipUpdateImport } from '../utils/config.mjs';

export default function (file, api) {
  const j = api.jscodeshift;

  let source = file.source;

  const componentName = getComponentLocalName(j, source, {
    componentName: 'Notification',
    importName: getFormaImport(),
  });

  if (!componentName) {
    return source;
  }

  source = j(source)
    .find(j.CallExpression, { callee: { object: { name: componentName } } })
    .forEach((path) => {
      const callee = path.value.callee;
      if (callee.property.name === 'setPosition') {
        callee.property.name = 'setPlacement';
        path.value.callee = callee;
      }

      if (path.value.arguments.length > 1) {
        const options = path.value.arguments[1];
        const renameMap = {
          close: 'onClose',
          canClose: 'withClose',
        };
        Object.keys(renameMap).forEach((name) => {
          j(options)
            .find(j.Identifier, { name })
            .forEach((key) => {
              j(key).replaceWith(j.identifier(renameMap[name]));
            });
        });
      }
    })
    .toSource();

  if (!shouldSkipUpdateImport()) {
    source = changeImport(j, source, {
      componentName,
      from: getFormaImport(),
      to: '@contentful/f36-components',
    });
  }

  return source;
}
