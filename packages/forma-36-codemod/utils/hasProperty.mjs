import { getProperty } from './getProperty.mjs';

export const hasProperty = function hasProperty(attributes, { propertyName }) {
  return Boolean(getProperty(attributes, { propertyName }));
};
