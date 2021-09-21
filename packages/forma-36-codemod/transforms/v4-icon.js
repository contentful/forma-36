const {
  getComponentLocalName,
  renameProperties,
  hasProperty,
  changeProperties,
  updateIcons,
  addIconImports,
  changeImport,
} = require('../utils');
const { getFormaImport, shouldSkipUpdateImport } = require('../utils/config');

module.exports = function (file, api) {
  const j = api.jscodeshift;

  let source = file.source;

  const componentName = getComponentLocalName(j, source, {
    componentName: 'Icon',
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
          color: 'variant',
        },
      });

      // if property icon is static = then remove the property and replace Icon with IconName

      // if property is not static = rename icon={condition ? "Edit" : "Download"} to as={condition ? EditIcon : DownloadIcon}

      if (hasProperty(modifiedAttributes, { propertyName: 'icon' })) {
        modifiedAttributes = updateIcons(modifiedAttributes, {
          j,
          icons: usedIcons,
          propertyName: 'icon',
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
