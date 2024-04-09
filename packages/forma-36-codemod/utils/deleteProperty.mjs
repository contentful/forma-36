import { warningMessage } from './warningMessage.mjs';

export const deleteProperty = function deleteProperty(
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
