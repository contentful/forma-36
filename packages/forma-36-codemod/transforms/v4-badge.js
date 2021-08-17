const {
  getComponentLocalName,
  renameProperties,
  changeProperties,
  changeImportWithComponentName,
  changeComponentName,
} = require('../utils');
const { getFormaImport, shouldSkipUpdateImport } = require('../utils/config');

module.exports = function (file, api) {
  const j = api.jscodeshift;

  let source = file.source;

  const componentName = getComponentLocalName(j, source, {
    componentName: 'Tag',
    importName: getFormaImport(),
  });

  if (!componentName) {
    return source;
  }

  source = changeProperties(j, source, {
    componentName,
    fn(attributes) {
      let modifiedAttributes = attributes;

      modifiedAttributes = renameProperties(modifiedAttributes, {
        renameMap: {
          tagType: 'variant',
        },
      });

      return modifiedAttributes;
    },
  });

  source = changeComponentName(j, source, {
    componentName,
    outputComponentName: 'Badge',
  });

  if (!shouldSkipUpdateImport()) {
    source = changeImportWithComponentName(j, source, {
      componentName,
      from: getFormaImport(),
      to: '@contentful/f36-components',
      outputComponentName: 'Badge',
    });
  }

  return source;
};
