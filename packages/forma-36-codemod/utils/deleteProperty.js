const { changeProperties } = require('./changeProperties');

module.exports.deleteProperty = function deleteProperty(
  j,
  source,
  { componentName, propertyName },
) {
  return changeProperties(j, source, {
    componentName,
    fn(attributes) {
      return attributes.filter((attribute) => {
        return attribute.name.name !== propertyName;
      });
    },
  });
};
