const {
  getComponentLocalName,
  renameProperties,
  hasProperty,
  addProperty,
  changeProperties,
  updatePropertyValue,
  updateIcons,
  addIconImports,
  removeComponentImport,
  addImport,
} = require('../utils');

module.exports = function (file, api) {
  const j = api.jscodeshift;

  let source = file.source;

  const componentName = getComponentLocalName(j, source, {
    componentName: 'TextLink',
    importName: '@contentful/forma-36-react-components',
  });

  source = removeComponentImport(j, source, {
    componentName: 'TextLink',
    importName: '@contentful/forma-36-react-components',
  });

  const usedIcons = [];

  source = changeProperties(j, source, {
    componentName,
    fn(attributes) {
      let modifiedAttributes = attributes;

      modifiedAttributes = renameProperties(modifiedAttributes, {
        renameMap: {
          linkType: 'variant',
          disabled: 'isDisabled',
          iconPosition: 'alignIcon',
          text: 'children',
        },
      });

      modifiedAttributes = updatePropertyValue(modifiedAttributes, {
        j,
        propertyName: 'alignIcon',
        propertyValue: (value) => {
          if (value.value === 'left') {
            return j.literal('start');
          } else if (value.value === 'right') {
            return j.literal('end');
          } else {
            console.warn(
              "TextLink: Couldn't automatically update alignIcon value",
            );
            return value;
          }
        },
      });

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

  const importResult = addImport(j, source, [
    j.template.statement`import { TextLink } from "@contentful/f36-components"`,
  ]);
  source = importResult.source;
  source = addIconImports({ j, source, icons: usedIcons });

  return source;
};
