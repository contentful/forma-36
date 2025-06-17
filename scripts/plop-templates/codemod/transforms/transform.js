const {
  getComponentLocalName,
  changeProperties,
  changeImport,
} = require('../../utils');
const { getImport, shouldSkipUpdateImport } = require('../../utils/config');

module.exports = function (file, api) {
  const j = api.jscodeshift;
  const importName = getImport();

  let source = file.source;

  const componentName = getComponentLocalName(j, source, {
    componentName: 'ComponentName',
    importName,
  });

  if (!componentName) {
    return source;
  }

  source = changeProperties(j, source, {
    componentName,
    fn(attributes) {
      let modifiedAttributes = attributes;

      return modifiedAttributes;
    },
  });

  if (!shouldSkipUpdateImport()) {
    source = changeImport(j, source, {
      componentName,
      from: importName,
      to: '@contentful/f36-components',
    });
  }

  return source;
};
