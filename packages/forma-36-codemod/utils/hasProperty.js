const { getProperty } = require('./getProperty');

module.exports.hasProperty = function hasProperty(
  attributes,
  { propertyName },
) {
  return Boolean(getProperty(attributes, { propertyName }));
};
