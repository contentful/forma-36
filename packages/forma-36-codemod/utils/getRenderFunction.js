const { getNonBlankChildren } = require('./getNonBlankChildren');

/**
 * Gets the render function of a component using a function as its only child: `<X>{() => …}</X>`
 * @param {*} element - JSXElement node
 * @returns the function expression, or undefined if children are not a single function
 */
module.exports.getRenderFunction = function getRenderFunction(element) {
  const children = getNonBlankChildren(element);
  const fn = children[0]?.expression;
  return children.length === 1 &&
    ['ArrowFunctionExpression', 'FunctionExpression'].includes(fn?.type)
    ? fn
    : undefined;
};
