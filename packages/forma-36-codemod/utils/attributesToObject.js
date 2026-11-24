/**
 * Converts JSX attributes to an object expression: `a="x" b={b} c {...d}` -> `{ a: 'x', b: b, c: true, ...d }`
 * ponytail: JSXNamespacedName attributes (`xlink:href`) are not handled
 * @param {*} j - jscodeshift API
 * @param {array} attributes - list of JSX attributes
 * @returns object expression
 */
module.exports.attributesToObject = function attributesToObject(j, attributes) {
  return j.objectExpression(
    attributes.map((attribute) => {
      if (attribute.type === 'JSXSpreadAttribute') {
        return j.spreadElement(attribute.argument);
      }
      const { name } = attribute.name;
      const key = /^[A-Za-z_$][\w$]*$/.test(name)
        ? j.identifier(name)
        : j.stringLiteral(name);
      let value = j.booleanLiteral(true);
      if (attribute.value?.type === 'JSXExpressionContainer') {
        value = attribute.value.expression;
      } else if (attribute.value) {
        value = j.stringLiteral(attribute.value.value);
      }
      return j.objectProperty(key, value);
    }),
  );
};
