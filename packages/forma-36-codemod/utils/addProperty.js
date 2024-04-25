/**
 * Add new property to the element attributes list
 * @param {array} attributes - original list of attributes
 * @param {{j: *, propertyName: string, propertyValue: string}} params - Object with new property name and value and jscodeshift API
 * @returns Attributes list with added property
 */
module.exports.addProperty = function addProperty(
  attributes,
  { j, propertyName, propertyValue },
) {
  return [
    j.jsxAttribute(j.jsxIdentifier(propertyName), propertyValue),
    ...attributes,
  ];
};
