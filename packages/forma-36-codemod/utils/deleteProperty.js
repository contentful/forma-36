const { warningMessage } = require('./warningMessage');

/**
 * Deletes a property from the attributes list
 * @param {array} attributes - original list of attributes
 * @param {{propertyName: string, file: object}} param - Object with property name and file object
 * @returns Attributes list without the property, and warning message if Spread Attribute is found
 */
module.exports.deleteProperty = function deleteProperty(
  attributes,
  { propertyName, file },
) {
  return attributes.filter((attribute) => {
    if (attribute.type === 'JSXSpreadAttribute') {
      warningMessage(
        'There seems to be a Spread Attribute, please double check that the new Props are correct.',
        { file, value: attribute },
      );
    }
    return attribute.name?.name !== propertyName;
  });
};
