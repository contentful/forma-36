import { updatePropertyValue } from './updatePropertyValue.mjs';
import { isConditionalExpression } from './updateTernaryValues.mjs';
import { addImport } from './addImport.mjs';

export const updateIcons = function updateIcons(
  attributes,
  {
    j,
    icons,
    propertyName = 'icon',
    replaceElement = (j, name) => {
      return j.jsxElement(j.jsxOpeningElement(j.jsxIdentifier(name), [], true));
    },
  },
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
            ? replaceElement(j, iconNames[index])
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

export const addIconImports = function addIconImports({ j, icons, source }) {
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
