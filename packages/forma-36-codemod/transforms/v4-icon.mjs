import {
  getComponentLocalName,
  renameProperties,
  hasProperty,
  getProperty,
  deleteProperty,
  changeProperties,
  updateIcons,
  addIconImports,
  changeImport,
} from '../utils/index.mjs';
import { getFormaImport, shouldSkipUpdateImport } from '../utils/config.mjs';

export default function (file, api) {
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
    fn(attributes, element) {
      let modifiedAttributes = attributes;

      modifiedAttributes = renameProperties(modifiedAttributes, {
        renameMap: {
          color: 'variant',
        },
      });

      if (hasProperty(modifiedAttributes, { propertyName: 'icon' })) {
        const property = getProperty(modifiedAttributes, {
          propertyName: 'icon',
        });

        // if property icon is static => then remove the property and replace Icon with IconName
        if (
          property.value.type === 'Literal' ||
          property.value.type === 'StringLiteral'
        ) {
          const icon = property.value.value + 'Icon';
          usedIcons.push(icon);

          modifiedAttributes = deleteProperty(modifiedAttributes, {
            propertyName: 'icon',
            file,
          });
          element.value.name.name = icon;
        }
        // if property icon is dynamic => use "as" property
        else {
          modifiedAttributes = updateIcons(modifiedAttributes, {
            j,
            icons: usedIcons,
            propertyName: 'icon',
            replaceElement: (j, name) => {
              return j.jsxIdentifier(name);
            },
          });
          modifiedAttributes = renameProperties(modifiedAttributes, {
            renameMap: {
              icon: 'as',
            },
          });
        }
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
}
