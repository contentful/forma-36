const {
  getComponentLocalName,
  changeProperties,
  changeImport,
  removeComponentImport,
  renameProperties,
  changeComponentName,
} = require('../utils');
const { getFormaImport, shouldSkipUpdateImport } = require('../utils/config');
const { pipe } = require('./common/pipe');

function entityListCodemod(file, api) {
  const j = api.jscodeshift;
  let source = file.source;

  const componentName = getComponentLocalName(j, source, {
    componentName: 'EntityList',
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

function entityListItemCodemod(file, api) {
  const j = api.jscodeshift;
  let source = file.source;

  const componentName = getComponentLocalName(j, source, {
    componentName: 'EntityListItem',
    importName: getFormaImport(),
  });

  if (!componentName) {
    return source;
  }

  source = changeProperties(j, source, {
    componentName,
    fn(attributes) {
      return renameProperties(attributes, {
        renameMap: {
          dropdownListElements: 'actions',
        },
      });
    },
  });

  source = changeComponentName(j, source, {
    componentName,
    outputComponentName: 'EntityList.Item',
  });

  if (!shouldSkipUpdateImport()) {
    source = removeComponentImport(j, source, {
      importName: getFormaImport(),
      componentName,
    });
    source = changeImport(j, source, {
      componentName: 'EntityList',
      from: getFormaImport(),
      to: '@contentful/f36-components',
    });
  }

  return source;
}

module.exports = pipe([entityListCodemod, entityListItemCodemod]);
