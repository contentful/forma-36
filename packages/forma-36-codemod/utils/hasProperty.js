const { getProperty } = require('./getProperty');

/**
 * Check if a property exists on the attributes list
 * @param {*} attributes - original list of attributes
 * @param {{propertyName: string}} param - Object with property name
 * @returns true if property exists on list, false otherwise
 */
module.exports.hasProperty = function hasProperty(
  attributes,
  { propertyName },
) {
  return Boolean(getProperty(attributes, { propertyName }));
};
