const { changeProperties } = require('./changeProperties');

module.exports.renameProperties = function renameProperties(
  j,
  source,
  { componentName, renameMap },
) {
  return changeProperties(j, source, {
    componentName,
    fn(attributes) {
      return attributes.map((attribute) => {
        const match = renameMap[attribute.name.name];

        if (match) {
          return {
            ...attribute,
            name: {
              ...attribute.name,
              name: match,
            },
          };
        }

        return attribute;
      });
    },
  });
};
