module.exports.deleteProperty = function deleteProperty(
  attributes,
  { propertyName },
) {
  return attributes.filter((attribute) => {
    return attribute.name.name !== propertyName;
  });
};
