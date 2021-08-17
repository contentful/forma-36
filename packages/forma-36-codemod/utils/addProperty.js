module.exports.addProperty = function addProperty(
  attributes,
  { j, propertyName, propertyValue },
) {
  return [
    j.jsxAttribute(j.jsxIdentifier(propertyName), propertyValue),
    ...attributes,
  ];
};
