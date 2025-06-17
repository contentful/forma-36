/**
 * Get a property from the attributes list
 * @param {*} attributes - original list of attributes
 * @param {{propertyName: string}} param - Object with property name
 * @returns attribute or null if attribute doesn't exist on list
 */
module.exports.getProperty = function getProperty(
  attributes,
  { propertyName },
) {
  const found = attributes.find(
    (attribute) => attribute.name?.name === propertyName,
  );

  return found || null;
};
