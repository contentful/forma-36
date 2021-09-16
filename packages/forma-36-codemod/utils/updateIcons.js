const { updatePropertyValue } = require('./updatePropertyValue');
const { isConditionalExpression } = require('./updateTernaryValues');
const { addImport } = require('./addImport');

module.exports.updateIcons = function updateIcons(
  attributes,
  { j, icons, propertyName = 'icon' },
) {
  return updatePropertyValue(attributes, {
    j,
    propertyName,
    propertyValue: (value) => {
      if (isConditionalExpression(value, j)) {
        const iconNames = [
          value.expression.consequent.value,
          value.expression.alternate.value,
        ]
          .filter((name) => name)
          .map((iconName) => {
            const name = `${iconName}Icon`;
            !icons.includes(`${iconName}Icon`) && icons.push(`${iconName}Icon`);
            return name;
          });

        const getValueFor = (key) => {
          const index = key === 'consequent' ? 0 : 1;
          return iconNames[index] !== undefined
            ? j.jsxElement(
                j.jsxOpeningElement(
                  j.jsxIdentifier(iconNames[index]),
                  [],
                  true,
                ),
              )
            : value.expression[key];
        };
        const consequent = getValueFor('consequent');
        const alternate = getValueFor('alternate');

        return j.jsxExpressionContainer(
          j.conditionalExpression(value.expression.test, consequent, alternate),
        );
      }

      const iconName = `${value.value}Icon`;
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
