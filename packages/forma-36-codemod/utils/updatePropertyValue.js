/**
 * Updates the value of a property in the list of attributes keeping the same name
 * @param {*} attributes - original list of attributes
 * @param {{propertyName: string, propertyValue: string}} param - Object with property name and property value
 * @returns Updated list of attributes with the new property value
 */
module.exports.updatePropertyValue = function updatePropertyValue(
  attributes,
  { propertyName, propertyValue },
) {
  return attributes.map((attribute) => {
    if (attribute.name?.name === propertyName) {
      return {
        ...attribute,
        value: propertyValue(attribute.value),
      };
    }
    return attribute;
  });
};
