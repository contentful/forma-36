module.exports.renameProperties = function renameProperties(
  j,
  source,
  { componentName, renameMap },
) {
  return j(source)
    .find(j.JSXOpeningElement, { name: { name: componentName } })
    .forEach((p) => {
      const { name, attributes, selfClosing } = p.value;

      const newAttributes = attributes.map((attribute) => {
        const match = renameMap[attribute.name.name];

        if (match) {
          return {
            ...attribute,
            name: {
              ...attribute.name,
              name: match,
            },
          };
        }

        return attribute;
      });

      j(p).replaceWith(j.jsxOpeningElement(name, newAttributes, selfClosing));
    })
    .toSource();
};
