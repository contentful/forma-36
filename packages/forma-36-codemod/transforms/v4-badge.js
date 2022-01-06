const {
  getComponentLocalName,
  renameProperties,
  changeProperties,
  changeImport,
  changeComponentName,
  updatePropertyValue,
  addImport,
} = require('../utils');
const { getFormaImport, shouldSkipUpdateImport } = require('../utils/config');

function changeTagToBadge(j, source) {
  const componentName = getComponentLocalName(j, source, {
    componentName: 'Tag',
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
          tagType: 'variant',
        },
      });

      modifiedAttributes = updatePropertyValue(modifiedAttributes, {
        j,
        propertyName: 'variant',
        propertyValue: (value) => {
          if (value.value === 'muted') {
            return j.literal('secondary');
          }
          return value;
        },
      });

      return modifiedAttributes;
    },
  });

  source = changeComponentName(j, source, {
    componentName,
    outputComponentName: 'Badge',
  });

  if (!shouldSkipUpdateImport()) {
    source = changeImport(j, source, {
      componentName,
      from: getFormaImport(),
      to: '@contentful/f36-components',
      outputComponentName: 'Badge',
    });
  }

  return source;
}

function changeBadgeWithEntityStatusType(j, source) {
  const componentName = getComponentLocalName(j, source, {
    componentName: 'Badge',
    importName: shouldSkipUpdateImport()
      ? getFormaImport()
      : '@contentful/f36-components',
  });

  if (!componentName) {
    return source;
  }

  let needToImportEntityStatusBadge = false;

  function removeChildren(j, source, componentName) {
    return j(source)
      .find(j.JSXOpeningElement, { name: { name: componentName } })
      .forEach((p) => {
        const { attributes } = p.value;
        const hasEntityStatusType = Boolean(
          attributes.find((attr) => {
            return attr.name.name === 'entityStatusType';
          }),
        );
        if (hasEntityStatusType) {
          needToImportEntityStatusBadge = true;
          j(p.parentPath).replaceWith(
            j.jsxOpeningElement(
              {
                ...p.parentPath.value.openingElement.name,
                name: 'EntityStatusBadge',
              },
              p.parentPath.value.openingElement.attributes,
              true,
            ),
          );
        }
      })
      .toSource();
  }

  source = removeChildren(j, source, componentName);

  if (needToImportEntityStatusBadge) {
    const result = addImport(j, source, [
      j.template.statement([
        `import { EntityStatusBadge } from "${
          shouldSkipUpdateImport()
            ? getFormaImport()
            : '@contentful/f36-components'
        }"`,
      ]),
    ]);
    source = result.source;
  }

  return source;
}

module.exports = function (file, api) {
  const j = api.jscodeshift;

  let source = file.source;

  source = changeTagToBadge(j, source);
  source = changeBadgeWithEntityStatusType(j, source);

  return source;
};
