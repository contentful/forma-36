/**
 * Rename properties in the list of attributes, keeping the same value
 * @param {*} attributes - original list of attributes
 * @param {{renameMap: { [x: string]: string }}} param - Object with renameMap
 * @returns Attributes list with renamed properties
 */
module.exports.renameProperties = function renameProperties(
  attributes,
  { renameMap },
) {
  return attributes
    .map((attribute) => {
      const match = renameMap[attribute.name?.name];

      if (match) {
        return {
          ...attribute,
          name: {
            ...attribute.name,
            name: match,
          },
        };
      }

      if (match === null) {
        return null;
      }

      return attribute;
    })
    .filter((attribute) => attribute !== null);
};
