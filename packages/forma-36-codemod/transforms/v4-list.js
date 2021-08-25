const {
  getComponentLocalName,
  changeImport,
  changeProperties,
  renameProperties,
} = require('../utils');
const { getFormaImport, shouldSkipUpdateImport } = require('../utils/config');

function changeListComponent(j, source) {
  const componentName = getComponentLocalName(j, source, {
    componentName: 'List',
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

      modifiedAttributes = renameProperties(modifiedAttributes, {
        renameMap: {
          element: 'as',
        },
      });
      return modifiedAttributes;
    },
  });
  return source;
}

function changeListItemComponent(j, source) {
  const componentName = getComponentLocalName(j, source, {
    componentName: 'ListItem',
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
  return source;
}

module.exports = function (file, api) {
  const j = api.jscodeshift;

  let source = file.source;

  source = changeListComponent(j, source);
  source = changeListItemComponent(j, source);
  return source;
};
