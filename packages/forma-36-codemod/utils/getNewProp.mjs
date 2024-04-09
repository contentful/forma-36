import { addProperty } from './addProperty.mjs';
import { getProperty } from './getProperty.mjs';

/**
 * Function that adds a new prop to attributes list and returns the added prop
 *
 * @returns property
 */
export const getNewProp = function getNewProp(
  attributes,
  { j, propertyName, propertyValue },
) {
  attributes = addProperty(attributes, {
    j,
    propertyName,
    propertyValue,
  });

  return getProperty(attributes, {
    propertyName,
  });
};
