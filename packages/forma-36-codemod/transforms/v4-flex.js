const {
  getComponentLocalName,
  changeImport,
  changeProperties,
  renameProperties,
  updatePropertyValue,
} = require('../utils');
const { getFormaImport, shouldSkipUpdateImport } = require('../utils/config');

module.exports = function (file, api) {
  const j = api.jscodeshift;

  let source = file.source;

  const componentName = getComponentLocalName(j, source, {
    componentName: 'Flex',
    importName: getFormaImport(),
  });

  if (!componentName) {
    return source;
  }

  if (!shouldSkipUpdateImport()) {
    source = changeImport(j, source, {
      componentName,
      from: getFormaImport(),
      to: '@contentful/f36-components',
    });
  }

  source = changeProperties(j, source, {
    componentName: componentName,
    fn(attributes) {
      let modifiedAttributes = attributes;

      modifiedAttributes = updatePropertyValue(modifiedAttributes, {
        j,
        propertyName: 'noShrink',
        propertyValue: () => {
          return j.jsxExpressionContainer(j.literal(0));
        },
      });

      modifiedAttributes = renameProperties(modifiedAttributes, {
        renameMap: {
          htmlTag: 'as',
          inlineFlex: 'isInline',
          noShrink: 'flexShrink',
        },
      });

      return modifiedAttributes;
    },
  });

  return source;
};
