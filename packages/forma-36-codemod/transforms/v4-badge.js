const {
  getComponentLocalName,
  renameProperties,
  changeProperties,
  changeImport,
  changeComponentName,
  updatePropertyValue,
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

      modifiedAttributes = updatePropertyValue(modifiedAttributes, {
        j,
        propertyName: 'variant',
        propertyValue: (value) => {
          if (value.value === 'muted') {
            return j.literal('secondary');
          }
          return value;
        },
      });

      return modifiedAttributes;
    },
  });

  source = changeComponentName(j, source, {
    componentName,
    outputComponentName: 'Badge',
  });

  // TODO: add and option to migrate <Tag entityStatusType="draft">Draft</Tag>; to <EntityStatusBadge entityStatus="draft" />;

  if (!shouldSkipUpdateImport()) {
    source = changeImport(j, source, {
      componentName,
      from: getFormaImport(),
      to: '@contentful/f36-components',
      outputComponentName: 'Badge',
    });
  }

  return source;
};
