import { modifyPropsCodemod } from './common/modify-props-codemod.mjs';
import { pipe } from './common/pipe.mjs';

import {
  getComponentLocalName,
  changeImport,
  renameProperties,
  removeComponentImport,
  changeComponentName,
  changeProperties,
} from '../utils/index.mjs';
import { getFormaImport, shouldSkipUpdateImport } from '../utils/config.mjs';

function tableBodyCodemod(file, api) {
  const j = api.jscodeshift;
  let source = file.source;

  const componentName = getComponentLocalName(j, source, {
    componentName: 'TableBody',
    importName: getFormaImport(),
  });

  if (!componentName) {
    return source;
  }

  source = changeComponentName(j, source, {
    componentName: 'TableBody',
    outputComponentName: 'Table.Body',
  });

  if (!shouldSkipUpdateImport()) {
    source = removeComponentImport(j, source, {
      componentName: 'TableBody',
      importName: getFormaImport(),
    });
    source = changeImport(j, source, {
      componentName,
      from: getFormaImport(),
      to: '@contentful/f36-components',
      outputComponentName: 'Table',
    });
  }

  return source;
}

function tableCellCodemod(file, api) {
  const j = api.jscodeshift;
  let source = file.source;

  const componentName = getComponentLocalName(j, source, {
    componentName: 'TableCell',
    importName: getFormaImport(),
  });

  if (!componentName) {
    return source;
  }

  source = changeComponentName(j, source, {
    componentName: 'TableCell',
    outputComponentName: 'Table.Cell',
  });

  if (!shouldSkipUpdateImport()) {
    source = removeComponentImport(j, source, {
      componentName: 'TableCell',
      importName: getFormaImport(),
    });
    source = changeImport(j, source, {
      componentName,
      from: getFormaImport(),
      to: '@contentful/f36-components',
      outputComponentName: 'Table',
    });
  }

  return source;
}

function tableHeadCodemod(file, api) {
  const j = api.jscodeshift;
  let source = file.source;

  const componentName = getComponentLocalName(j, source, {
    componentName: 'TableHead',
    importName: getFormaImport(),
  });

  if (!componentName) {
    return source;
  }

  source = changeComponentName(j, source, {
    componentName: 'TableHead',
    outputComponentName: 'Table.Head',
  });

  if (!shouldSkipUpdateImport()) {
    source = removeComponentImport(j, source, {
      componentName: 'TableHead',
      importName: getFormaImport(),
    });
    source = changeImport(j, source, {
      componentName,
      from: getFormaImport(),
      to: '@contentful/f36-components',
      outputComponentName: 'Table',
    });
  }

  return source;
}

function tableRowCodemod(file, api) {
  const j = api.jscodeshift;
  let source = file.source;

  const componentName = getComponentLocalName(j, source, {
    componentName: 'TableRow',
    importName: getFormaImport(),
  });

  if (!componentName) {
    return source;
  }

  source = changeProperties(j, source, {
    componentName,
    fn(attributes) {
      let modifiedAttributes = attributes;

      modifiedAttributes = renameProperties(modifiedAttributes, {
        renameMap: {
          selected: 'isSelected',
        },
      });

      return modifiedAttributes;
    },
  });

  source = changeComponentName(j, source, {
    componentName: 'TableRow',
    outputComponentName: 'Table.Row',
  });

  if (!shouldSkipUpdateImport()) {
    source = removeComponentImport(j, source, {
      componentName: 'TableRow',
      importName: getFormaImport(),
    });
    source = changeImport(j, source, {
      componentName,
      from: getFormaImport(),
      to: '@contentful/f36-components',
      outputComponentName: 'Table',
    });
  }

  return source;
}

export default pipe([
  modifyPropsCodemod({
    componentName: 'Table',
    renameMap: {},
  }),
  tableBodyCodemod,
  tableRowCodemod,
  tableCellCodemod,
  tableHeadCodemod,
]);
