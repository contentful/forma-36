const {
  pipe,
  hasProperty,
  getProperty,
  changeProperties,
  updateTernaryValues,
  updatePropertyValue,
} = require('../../utils');
const { isConditionalExpression } = require('../../utils/updateTernaryValues');

const updateToV6Popover = function (file, api) {
  const j = api.jscodeshift;
  let source = file.source;

  const components = ['Popover', 'Menu', 'Tooltip'];

  components.forEach((component) => {
    source = changeProperties(j, source, {
      componentName: component,
      fn(attributes) {
        let modifiedAttributes = attributes;

        // change auto-end and auto-start placement properties
        if (hasProperty(modifiedAttributes, { propertyName: 'placement' })) {
          let placement = getProperty(modifiedAttributes, {
            propertyName: 'placement',
          });
          modifiedAttributes = updatePropertyValue(modifiedAttributes, {
            j,
            propertyName: 'placement',
            propertyValue: () => {
              if (placement.value.type === 'StringLiteral') {
                if (placement.value.value === 'auto-end') {
                  console.log('placement auto end');
                  return j.literal('right-end');
                } else if (placement.value.value === 'auto-start') {
                  console.log('placement auto start');
                  return j.literal('right-start');
                }
              }
            },
          });
        }
        return modifiedAttributes;
      },
    });
  });

  return source;
};

module.exports = pipe([updateToV6Popover]);
