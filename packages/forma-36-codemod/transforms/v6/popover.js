const {
  pipe,
  hasProperty,
  getProperty,
  changeProperties,
  updatePropertyValue,
} = require('../../utils');

const updateToV6Popover = function (file, api) {
  const j = api.jscodeshift;
  let source = file.source;

  const components = ['Popover', 'Menu', 'Tooltip'];

  components.forEach((component) => {
    source = changeProperties(j, source, {
      componentName: component,
      fn(attributes) {
        let modifiedAttributes = attributes;

        // change auto-end and auto-start placement properties
        if (hasProperty(modifiedAttributes, { propertyName: 'placement' })) {
          let placement = getProperty(modifiedAttributes, {
            propertyName: 'placement',
          });
          modifiedAttributes = updatePropertyValue(modifiedAttributes, {
            j,
            propertyName: 'placement',
            propertyValue: () => {
              if (placement.value.type === 'StringLiteral') {
                if (placement.value.value === 'auto-end') {
                  return j.literal('right-end');
                } else if (placement.value.value === 'auto-start') {
                  return j.literal('right-start');
                } else {
                  return j.literal(placement.value.value);
                }
              }
            },
          });
        }

        // transform offset={[mainAxis, crossAxis]} into offset={{mainAxis: X, crossAxis: Y}}
        if (hasProperty(modifiedAttributes, { propertyName: 'offset' })) {
          modifiedAttributes = updatePropertyValue(modifiedAttributes, {
            j,
            propertyName: 'offset',
            propertyValue: (value) => {
              // Cases:
              // 1. offset={[5,6]} => JSXExpressionContainer with ArrayExpression
              // 2. offset={[a,b]} => JSXExpressionContainer with ArrayExpression (Identifiers)
              // 3. offset={someIdentifier} (leave as-is)
              // 4. offset={{mainAxis:5}} already object -> leave
              // 5. offset={[5]} single value: treat as mainAxis, omit crossAxis

              if (!value) return value;

              // Literal string/number shouldn't normally happen for offset; leave unchanged
              if (
                value.type === 'StringLiteral' ||
                value.type === 'NumericLiteral'
              ) {
                return value;
              }

              if (value.type === 'JSXExpressionContainer') {
                const expr = value.expression;

                // Already an object: assume user handled it; do nothing
                if (expr.type === 'ObjectExpression') {
                  return value; // keep as-is
                }

                if (expr.type === 'ArrayExpression') {
                  const elements = expr.elements.filter(Boolean);
                  if (elements.length === 0) {
                    return value; // nothing to map
                  }
                  // Single-value shorthand: offset={[x]} -> offset={x}
                  if (elements.length === 1) {
                    const single = elements[0];
                    if (single.type === 'SpreadElement') return value;
                    return j.jsxExpressionContainer(single);
                  }

                  const [mainAxisEl, crossAxisEl] = elements;

                  // helper to turn an element into corresponding AST property value
                  const getPropValue = (el) => {
                    if (!el || el.type === 'SpreadElement') return null; // skip unsupported
                    if (el.type === 'Identifier') return j.identifier(el.name);
                    if (
                      el.type === 'NumericLiteral' ||
                      el.type === 'StringLiteral' ||
                      el.type === 'Literal'
                    )
                      return j.literal(el.value);
                    // For expressions (BinaryExpression, CallExpression, etc.) keep original
                    return el;
                  };

                  const objectProperties = [];
                  const mainAxisVal = getPropValue(mainAxisEl);
                  if (mainAxisVal) {
                    objectProperties.push(
                      j.objectProperty(j.identifier('mainAxis'), mainAxisVal),
                    );
                  }
                  const crossAxisVal = getPropValue(crossAxisEl);
                  if (crossAxisVal) {
                    objectProperties.push(
                      j.objectProperty(j.identifier('crossAxis'), crossAxisVal),
                    );
                  }

                  if (objectProperties.length) {
                    const objectExpression =
                      j.objectExpression(objectProperties);
                    objectExpression.extra = { parenthesized: false }; // formatting hint
                    return j.jsxExpressionContainer(objectExpression);
                  }
                  return value; // fallback
                }
              }

              return value;
            },
          });
        }
        return modifiedAttributes;
      },
    });
  });

  return source;
};

module.exports = pipe([updateToV6Popover]);
