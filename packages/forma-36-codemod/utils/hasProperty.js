module.exports.hasProperty = function hasProperty(
  attributes,
  { propertyName },
) {
  let found = false;

  attributes.forEach((attribute) => {
    if (found === false) {
      if (attribute.name.name === propertyName) {
        found = true;
      }
    }
  });

  return found;
};
