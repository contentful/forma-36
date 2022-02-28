const {
  getComponentLocalName,
  changeProperties,
  changeImport,
  deleteProperty,
  renameProperties,
  hasProperty,
  addProperty,
  warningMessage,
} = require('../utils');
const { getFormaImport, shouldSkipUpdateImport } = require('../utils/config');

module.exports = function (file, api) {
  const j = api.jscodeshift;

  let source = file.source;

  const componentName = getComponentLocalName(j, source, {
    componentName: 'AssetCard',
    importName: getFormaImport(),
  });

  if (!componentName) {
    return source;
  }

  source = changeProperties(j, source, {
    componentName,
    fn(attributes) {
      let modifiedAttributes = attributes;

      // Remove custom drag handle component
      modifiedAttributes = deleteProperty(modifiedAttributes, {
        propertyName: 'cardDragHandleComponent',
        file,
      });

      // Rename properties
      modifiedAttributes = renameProperties(modifiedAttributes, {
        renameMap: {
          selected: 'isSelected',
          isDragActive: 'isDragging',
          statusIcon: 'icon',
          cardDragHandleProps: 'dragHandleProps',
        },
      });

      if (
        hasProperty(modifiedAttributes, {
          propertyName: 'dropdownListElements',
        })
      ) {
        warningMessage(
          'dropdownListElements was removed. Please manually update your implementation to use the `actions` prop',
          { file },
        );
      }

      if (
        hasProperty(modifiedAttributes, {
          propertyName: 'href',
        })
      ) {
        modifiedAttributes = addProperty(modifiedAttributes, {
          j,
          propertyName: 'as',
          propertyValue: j.literal('a'),
        });
      }

      return modifiedAttributes;
    },
  });

  if (!shouldSkipUpdateImport()) {
    source = changeImport(j, source, {
      componentName,
      from: getFormaImport(),
      to: '@contentful/f36-components',
    });
  }

  return source;
};
