import {
  getComponentLocalName,
  changeProperties,
  changeImport,
  removeComponentImport,
  renameProperties,
  changeComponentName,
  hasProperty,
  warningMessage,
} from '../utils/index.mjs';
import { getFormaImport, shouldSkipUpdateImport } from '../utils/config.mjs';
import { pipe } from './common/pipe.mjs';

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
      if (
        hasProperty(attributes, {
          propertyName: 'dropdownListElements',
        })
      ) {
        warningMessage(
          '`dropdownListElements` was renamed to `actions` and updated to use the new `Menu.Item` component. Please manually update this prop value.',
          { file },
        );
      }

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

export default pipe([entityListCodemod, entityListItemCodemod]);
