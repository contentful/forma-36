module.exports.updatePropertyValue = function updatePropertyValue(
  attributes,
  { propertyName, propertyValue },
) {
  return attributes.map((attribute) => {
    if (attribute.name.name === propertyName) {
      return {
        ...attribute,
        value: propertyValue(attribute.value),
      };
    }
    return attribute;
  });
};
