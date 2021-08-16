module.exports.changeProperties = function changeProperties(
  j,
  source,
  { componentName, fn },
) {
  return j(source)
    .find(j.JSXOpeningElement, { name: { name: componentName } })
    .forEach((p) => {
      const { name, attributes, selfClosing } = p.value;
      const newAttributes = fn(attributes);
      j(p).replaceWith(j.jsxOpeningElement(name, newAttributes, selfClosing));
    })
    .toSource();
};
