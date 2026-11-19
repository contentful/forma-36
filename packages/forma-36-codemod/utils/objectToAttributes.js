const IDENTIFIER = /^[A-Za-z_$][\w$-]*$/;

/**
 * Converts an object expression to JSX attributes: `{ a: 'x', b, ...c }` -> `a="x" b={b} {...c}`.
 * Anything that cannot be converted safely becomes a single spread: `{...expression}`
 * @param {*} j - jscodeshift API
 * @param {*} expression - expression to convert
 * @returns list of JSX attributes
 */
module.exports.objectToAttributes = function objectToAttributes(j, expression) {
  const isConvertible = (prop) =>
    prop.type === 'SpreadElement' ||
    prop.type === 'SpreadProperty' ||
    (!prop.computed &&
      !prop.type.includes('Method') &&
      IDENTIFIER.test(prop.key.name ?? prop.key.value));

  if (
    expression.type !== 'ObjectExpression' ||
    !expression.properties.every(isConvertible)
  ) {
    return [j.jsxSpreadAttribute(expression)];
  }

  return expression.properties.map((prop) => {
    if (prop.type === 'SpreadElement' || prop.type === 'SpreadProperty') {
      return j.jsxSpreadAttribute(prop.argument);
    }
    const { value } = prop;
    const isPlainString =
      (value.type === 'StringLiteral' || value.type === 'Literal') &&
      typeof value.value === 'string' &&
      !/["\\]/.test(value.value);
    return j.jsxAttribute(
      j.jsxIdentifier(prop.key.name ?? prop.key.value),
      isPlainString
        ? j.stringLiteral(value.value)
        : j.jsxExpressionContainer(value),
    );
  });
};
