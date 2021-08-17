module.exports.getProperty = function getProperty(
  attributes,
  { propertyName },
) {
  const found = attributes.find(
    (attribute) => attribute.name.name === propertyName,
  );

  return found || null;
};
