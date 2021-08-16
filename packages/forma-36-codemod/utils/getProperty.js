module.exports.getProperty = function getProperty(
  attributes,
  { propertyName },
) {
  let found = null;

  attributes.forEach((attribute) => {
    if (found === null) {
      if (attribute.name.name === propertyName) {
        found = attribute;
      }
    }
  });

  return found;
};
