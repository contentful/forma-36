const { updatePropertyValue } = require('./updatePropertyValue');
const { addImport } = require('./addImport');

module.exports.updateIcons = function updateIcons(attributes, { j, icons }) {
  return updatePropertyValue(attributes, {
    j,
    propertyName: 'icon',
    propertyValue: (value) => {
      const iconName = value.value;
      if (!icons.includes(iconName)) {
        icons.push(iconName);
      }
      return j.jsxExpressionContainer(
        j.jsxElement(j.jsxOpeningElement(j.jsxIdentifier(iconName), [], true)),
      );
    },
  });
};

module.exports.addIconImports = function addIconImports({ j, icons, source }) {
  if (icons.length <= 0) {
    return source;
  }
  const template = [
    `import { `,
    icons.join(', '),
    ` } from '@contentful/f36-icons'`,
  ].join('');
  const importResult = addImport(j, source, [j.template.statement([template])]);
  return importResult.source;
};
