import {
  getComponentLocalName,
  changeImport,
  changeProperties,
  renameProperties,
} from '../../utils/index.mjs';
import { getFormaImport, shouldSkipUpdateImport } from '../../utils/config.mjs';

export const modifyPropsCodemod = function (props) {
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
      fn(attributes, element) {
        let modifiedAttributes = attributes;

        if (props.beforeRename) {
          modifiedAttributes = props.beforeRename(modifiedAttributes, {
            j,
            element,
          });
        }

        modifiedAttributes = renameProperties(modifiedAttributes, {
          renameMap: props.renameMap,
        });

        if (props.afterRename) {
          modifiedAttributes = props.afterRename(modifiedAttributes, {
            j,
            element,
          });
        }

        return modifiedAttributes;
      },
    });

    return source;
  };
};
