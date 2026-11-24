// `Modal.Header` -> JSXMemberExpression, `Modal` -> JSXIdentifier
const toJsxName = (j, name) =>
  name
    .split('.')
    .map((part) => j.jsxIdentifier(part))
    .reduce((object, property) => j.jsxMemberExpression(object, property));

/**
 * Creates a new component that can be added to a source code.
 * @param {{componentName: string, props: array, childre: array, isSelfClosing: boolean, j: *}} param - Object with component name, properties, children, isSelfClosing flag and jscodeshift API
 * @param {string} param.componentName - Name of the component, dotted names like `Modal.Header` are supported
 * @param {array} param.props - Array of properties
 * @param {array} param.children - Array of children
 * @param {boolean} param.isSelfClosing - Flag to determine if the component is self closing
 * @param {*} param.j - jscodeshift API
 * @returns JSX component element that can be added to source code.
 */
module.exports.createComponent = function createComponent({
  componentName,
  props = [],
  children = [],
  isSelfClosing = false,
  j,
}) {
  if (isSelfClosing) {
    return j.jsxElement(
      j.jsxOpeningElement(toJsxName(j, componentName), props, true),
    );
  }

  return j.jsxElement(
    j.jsxOpeningElement(toJsxName(j, componentName), props),
    j.jsxClosingElement(toJsxName(j, componentName)),
    children,
  );
};
