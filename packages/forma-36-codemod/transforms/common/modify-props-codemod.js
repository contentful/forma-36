const {
  getComponentLocalName,
  changeImport,
  changeProperties,
  renameProperties,
} = require('../../utils');
const {
  getFormaImport,
  shouldSkipUpdateImport,
} = require('../../utils/config');

module.exports.modifyPropsCodemod = function (props) {
  return function (file, api) {
    const j = api.jscodeshift;

    let source = file.source;

    const componentName = getComponentLocalName(j, source, {
      componentName: props.componentName,
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
      componentName,
      fn(attributes) {
        let modifiedAttributes = attributes;

        if (props.beforeRename) {
          modifiedAttributes = props.beforeRename(modifiedAttributes, j);
        }

        modifiedAttributes = renameProperties(modifiedAttributes, {
          renameMap: props.renameMap,
        });

        if (props.afterRename) {
          modifiedAttributes = props.afterRename(modifiedAttributes, j);
        }

        return modifiedAttributes;
      },
    });

    return source;
  };
};
