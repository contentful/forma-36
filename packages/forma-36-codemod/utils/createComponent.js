module.exports.createComponent = function createComponent({
  componentName,
  props = [],
  children = [],
  j,
}) {
  return j.jsxElement(
    j.jsxOpeningElement(j.jsxIdentifier(componentName), props),
    j.jsxClosingElement(j.jsxIdentifier(componentName)),
    children,
  );
};
