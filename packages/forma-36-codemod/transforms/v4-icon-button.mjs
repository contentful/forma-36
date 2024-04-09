import {
  getComponentLocalName,
  renameProperties,
  addProperty,
  changeProperties,
  updateIcons,
  addIconImports,
  changeImport,
  deleteProperty,
  getProperty,
  updatePropertyValue,
  updateTernaryValues,
} from '../utils/index.mjs';
import { getFormaImport, shouldSkipUpdateImport } from '../utils/config.mjs';

export default function (file, api) {
  const j = api.jscodeshift;

  let source = file.source;

  const componentName = getComponentLocalName(j, source, {
    componentName: 'IconButton',
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

      const iconProps = getProperty(modifiedAttributes, {
        propertyName: 'iconProps',
      }).value.expression.properties;
      const iconObj = iconProps.find(({ key }) => key.name === 'icon');
      const props = iconProps.filter(({ key }) => key.name !== 'icon');

      const iconValue =
        iconObj.value.type === 'Literal' ||
        iconObj.value.type === 'StringLiteral'
          ? j.literal(iconObj.value.value)
          : j.jsxExpressionContainer(iconObj.value);

      modifiedAttributes = addProperty(modifiedAttributes, {
        j,
        propertyName: 'icon',
        propertyValue: iconValue,
      });

      modifiedAttributes = updateIcons(modifiedAttributes, {
        j,
        icons: usedIcons,
        propertyName: 'icon',
      });

      const icon = getProperty(modifiedAttributes, { propertyName: 'icon' });
      j(icon)
        .find(j.JSXOpeningElement)
        .forEach((i) => {
          const { name, attributes, selfClosing } = i.value;
          let newAttributes = attributes;
          props.forEach(({ key, value }) => {
            newAttributes = addProperty(newAttributes, {
              j,
              propertyName: key.name,
              propertyValue:
                value.type === 'Literal'
                  ? j.literal(value.value)
                  : j.jsxExpressionContainer(value),
            });
          });

          const variant = getProperty(modifiedAttributes, {
            propertyName: 'buttonType',
          });
          newAttributes = addProperty(newAttributes, {
            j,
            propertyName: 'variant',
            propertyValue: variant?.value || j.literal('primary'),
          });

          newAttributes = updatePropertyValue(newAttributes, {
            propertyName: 'variant',
            propertyValue: (value) => {
              if (value.value !== undefined) {
                return j.literal(value.value);
              }

              return updateTernaryValues(value, { j });
            },
          });

          j(i).replaceWith(
            j.jsxOpeningElement(name, newAttributes, selfClosing),
          );
        });

      modifiedAttributes = renameProperties(modifiedAttributes, {
        renameMap: {
          label: 'aria-label',
          disabled: 'isDisabled',
        },
      });

      modifiedAttributes = addProperty(modifiedAttributes, {
        j,
        propertyName: 'variant',
        propertyValue: j.literal('transparent'),
      });

      modifiedAttributes = deleteProperty(modifiedAttributes, {
        propertyName: 'buttonType',
        file,
      });
      modifiedAttributes = deleteProperty(modifiedAttributes, {
        propertyName: 'iconProps',
        file,
      });

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
}
