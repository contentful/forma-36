const {
  getComponentLocalName,
  renameProperties,
  hasProperty,
  addProperty,
  changeProperties,
  updatePropertyValue,
  updateIcons,
  addIconImports,
  changeImport,
  deleteProperty,
  updateTernaryValues,
  warningMessage,
} = require('../utils');
const { getFormaImport, shouldSkipUpdateImport } = require('../utils/config');

module.exports = function (file, api) {
  const j = api.jscodeshift;

  let source = file.source;

  const componentName = getComponentLocalName(j, source, {
    componentName: 'Button',
    importName: getFormaImport(),
  });

  if (!componentName) {
    return source;
  }

  const usedIcons = [];

  source = changeProperties(j, source, {
    componentName,
    fn(attributes) {
      let modifiedAttributes = attributes;

      modifiedAttributes = renameProperties(modifiedAttributes, {
        renameMap: {
          buttonType: 'variant',
          disabled: 'isDisabled',
          loading: 'isLoading',
        },
      });

      modifiedAttributes = updatePropertyValue(modifiedAttributes, {
        j,
        propertyName: 'variant',
        propertyValue: (value) => {
          const valueMap = {
            [undefined]: 'primary',
            muted: 'secondary',
            warning: 'secondary',
            naked: 'transparent',
          };
          if (value.value !== undefined && valueMap[value.value]) {
            if (value.value === 'warning') {
              warningMessage(
                'warning variant was deprecated, we updated the value to secondary please change this value if needed',
                { file, value },
              );
            }

            return j.literal(valueMap[value.value]);
          }

          return updateTernaryValues(value, { j, valueMap });
        },
      });

      if (!hasProperty(modifiedAttributes, { propertyName: 'variant' })) {
        modifiedAttributes = addProperty(modifiedAttributes, {
          j,
          propertyName: 'variant',
          propertyValue: j.literal('primary'),
        });
      }

      if (
        hasProperty(modifiedAttributes, { propertyName: 'indicateDropdown' })
      ) {
        modifiedAttributes = addProperty(modifiedAttributes, {
          j,
          propertyName: 'alignIcon',
          propertyValue: j.literal('end'),
        });
        modifiedAttributes = addProperty(modifiedAttributes, {
          j,
          propertyName: 'icon',
          propertyValue: j.literal('ChevronDown'),
        });

        modifiedAttributes = deleteProperty(modifiedAttributes, {
          propertyName: 'indicateDropdown',
        });
      }

      if (hasProperty(modifiedAttributes, { propertyName: 'href' })) {
        modifiedAttributes = addProperty(modifiedAttributes, {
          j,
          propertyName: 'as',
          propertyValue: j.literal('a'),
        });
      }

      if (hasProperty(modifiedAttributes, { propertyName: 'icon' })) {
        modifiedAttributes = updateIcons(modifiedAttributes, {
          j,
          icons: usedIcons,
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

  source = addIconImports({ j, source, icons: usedIcons });

  return source;
};
