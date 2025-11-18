/**
 * Runs provided function on each component with componentName in the source code and updates properties
 * @param {*} j - jscodeshift API
 * @param {*} source - original source code
 * @param {{componentName: string, fn: (attributes, component) => array}} params - Object with component name and function to update properties
 * @returns Source code with updated properties
 */
module.exports.changeProperties = function changeProperties(
  j,
  source,
  { componentName, fn },
) {
  return j(source)
    .find(j.JSXOpeningElement, { name: { name: componentName } })
    .forEach((p) => {
      const { name, attributes, selfClosing } = p.value;
      const newAttributes = fn(attributes, p);
      j(p).replaceWith(j.jsxOpeningElement(name, newAttributes, selfClosing));
    })
    .toSource();
};
