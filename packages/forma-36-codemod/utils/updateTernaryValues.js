/**
 * Checks if value is a conditional expression
 * @param {*} value - value to check
 * @param {*} j - jscodeshift API
 * @returns true if value is a conditional expression, false otherwise
 */
function isConditionalExpression(value, j) {
  return j(value).find(j.ConditionalExpression).length > 0;
}

const getValueFor = (key, { j, expression, valueMap = {} }) => {
  if (isConditionalExpression(expression.value[key], j)) {
    return updateTernaryValues(expression, { j, valueMap });
  }
  return j.literal(
    valueMap[expression.value[key].value] || expression.value[key].value,
  );
};

/**
 * Updates ternary expressions
 * @param {*} value - value to be updated
 * @param {{j: *, valueMap: {[x: string]: string}}} param - Object with jscodeshift API and valueMap
 * @returns updated ternary expressions
 */
function updateTernaryValues(value, { j, valueMap = {} }) {
  return j(value)
    .find(j.ConditionalExpression)
    .forEach((expression) => {
      const commonArgs = { j, expression, valueMap };

      const consequent = getValueFor('consequent', commonArgs);
      const alternate = getValueFor('alternate', commonArgs);

      if (consequent.value === alternate.value) {
        j(expression).replaceWith(j.literal(consequent.value));
      } else {
        j(expression).replaceWith(
          j.conditionalExpression(expression.value.test, consequent, alternate),
        );
      }
    })
    .toSource({ quote: 'single' });
}

module.exports.updateTernaryValues = updateTernaryValues;
module.exports.isConditionalExpression = isConditionalExpression;
