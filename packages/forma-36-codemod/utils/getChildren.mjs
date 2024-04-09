/**
 * Returns the prop value on correct format to be used as children.
 * @param {*} param.prop - prop to extract the value from
 * @param {*} param.j - Instance of jscodeshift to use
 * @returns Value to be passed to children when creating component
 */
export const getChildren = function getChildren({ prop, j }) {
  if (!prop) return [];
  return prop.value.type === 'JSXExpressionContainer'
    ? [prop.value]
    : [j.jsxText(prop.value.value)];
};
