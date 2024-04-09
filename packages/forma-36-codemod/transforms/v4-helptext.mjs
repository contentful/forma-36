import {
  getComponentLocalName,
  addProperty,
  addImport,
  removeComponentImport,
  warningMessage,
} from '../utils/index.mjs';
import { getFormaImport, shouldSkipUpdateImport } from '../utils/config.mjs';

const checkParent = (j, path, parentName) => {
  if (path.parent) {
    const parent = path.parent;
    if (
      parent.value.type === 'JSXElement' &&
      parent.value.openingElement.name.name.toLowerCase() === parentName
    ) {
      return false;
    }
    return checkParent(j, parent, parentName);
  }
  return true;
};

export default function (file, api) {
  const j = api.jscodeshift;

  let source = file.source;

  const componentName = getComponentLocalName(j, source, {
    componentName: 'HelpText',
    importName: getFormaImport(),
  });

  if (!componentName) {
    return source;
  }

  const elements = j(source).findJSXElements(componentName);
  const filteredElements = elements.filter((path) =>
    checkParent(j, path, 'form'),
  );
  const shouldKeepImport = elements.length > filteredElements.length;

  source = j(source)
    .findJSXElements(componentName)
    .filter((path) => checkParent(j, path, 'form'))
    .find(j.JSXIdentifier, {
      name: componentName,
    })
    .forEach((nodePath) => {
      nodePath.node.name = 'Text';
      if (nodePath.parent.value.type === 'JSXOpeningElement') {
        const { attributes } = nodePath.parent.value;
        let modifiedAttributes = attributes;
        const newAttributes = [
          { propertyName: 'marginTop', propertyValue: j.literal('spacingXs') },
          { propertyName: 'fontColor', propertyValue: j.literal('gray500') },
          { propertyName: 'as', propertyValue: j.literal('p') },
        ];
        newAttributes.forEach((attribute) => {
          modifiedAttributes = addProperty(modifiedAttributes, {
            j,
            ...attribute,
          });
        });
        nodePath.parent.value.attributes = modifiedAttributes;
      }
    })
    .toSource();

  source = addImport(j, source, [
    j.template.statement([
      `import { Text } from "${
        shouldSkipUpdateImport()
          ? getFormaImport()
          : '@contentful/f36-components'
      }"`,
    ]),
  ]).source;

  if (!shouldKeepImport) {
    source = removeComponentImport(j, source, {
      importName: getFormaImport(),
      componentName,
    });
  } else {
    warningMessage(
      'There are still uses of HelpText inside Form tags, please update to FormControl.HelpText',
      { file },
    );
  }

  return source;
}
