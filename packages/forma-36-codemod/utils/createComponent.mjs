export const createComponent = function createComponent({
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
