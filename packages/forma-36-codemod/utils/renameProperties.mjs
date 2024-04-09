export const renameProperties = function renameProperties(
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
