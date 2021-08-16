const {
  getComponentLocalName,
  renameProperties,
  hasProperty,
  addProperty,
  changeProperties,
} = require('../utils');

module.exports = function (file, api) {
  const j = api.jscodeshift;

  let source = file.source;

  const componentName = getComponentLocalName(j, source, {
    componentName: 'TextLink',
    importName: '@contentful/forma-36-react-components',
  });

  source = changeProperties(j, source, {
    componentName,
    fn(attributes) {
      let modifiedAttributes = attributes;

      modifiedAttributes = renameProperties(modifiedAttributes, {
        renameMap: {
          linkType: 'variant',
          disabled: 'isDisabled',
        },
      });

      if (hasProperty(modifiedAttributes, { propertyName: 'href' })) {
        modifiedAttributes = addProperty(modifiedAttributes, {
          j,
          propertyName: 'as',
          propertyValue: j.literal('a'),
        });
      }

      return modifiedAttributes;
    },
  });

  // todo: create a function that replaces icons with inlined icons

  // todo: rename iconPosition to alignIcon and update values / console.warn if update cannot be done

  // todo: move text to children if it's specified

  // todo: question: do we need to update imports somehow?

  return source;
};
