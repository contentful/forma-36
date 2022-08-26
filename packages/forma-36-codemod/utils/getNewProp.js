const { addProperty } = require('./addProperty');
const { getProperty } = require('./getProperty');

/**
 * Function that adds a new prop to attributes list and returns the added prop
 *
 * @returns property
 */
function getNewProp(attributes, { j, propertyName, propertyValue }) {
  attributes = addProperty(attributes, {
    j,
    propertyName,
    propertyValue,
  });

  return getProperty(attributes, {
    propertyName,
  });
}

module.exports.getNewProp = getNewProp;
