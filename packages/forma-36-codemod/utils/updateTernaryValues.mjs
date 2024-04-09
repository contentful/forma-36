export const isConditionalExpression = function isConditionalExpression(
  value,
  j,
) {
  return j(value).find(j.ConditionalExpression).length > 0;
};

const getValueFor = (key, { j, expression, valueMap = {} }) => {
  if (isConditionalExpression(expression.value[key], j)) {
    return updateTernaryValues(expression, { j, valueMap });
  }
  return j.literal(
    valueMap[expression.value[key].value] || expression.value[key].value,
  );
};

export const updateTernaryValues = function updateTernaryValues(
  value,
  { j, valueMap = {} },
) {
  return j(value)
    .find(j.ConditionalExpression)
    .forEach((expression) => {
      const commonArgs = { j, expression, valueMap };

      const consequent = getValueFor('consequent', commonArgs);
      const alternate = getValueFor('alternate', commonArgs);

      j(expression).replaceWith(
        j.conditionalExpression(expression.value.test, consequent, alternate),
      );
    })
    .toSource({ quote: 'single' });
};
