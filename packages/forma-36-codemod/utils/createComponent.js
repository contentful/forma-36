/**
 * Creates a new component that can be added to a source code.
 * @param {{componentName: string, props: array, childre: array, isSelfClosing: boolean, j: *}} param - Object with component name, properties, children, isSelfClosing flag and jscodeshift API
 * @param {string} param.componentName - Name of the component
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
  const jsxIdentifier = j.jsxIdentifier(componentName);

  if (isSelfClosing) {
    return j.jsxElement(j.jsxOpeningElement(jsxIdentifier, props, true));
  }

  return j.jsxElement(
    j.jsxOpeningElement(jsxIdentifier, props),
    j.jsxClosingElement(jsxIdentifier),
    children,
  );
};
