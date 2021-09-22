const { modifyPropsCodemod } = require('./common/modify-props-codemod');
const { hasProperty, getProperty } = require('../utils');

module.exports = modifyPropsCodemod({
  componentName: 'Tooltip',
  beforeRename: (attributes) => {
    if (
      hasProperty(attributes, { propertyName: 'content' }) &&
      typeof getProperty(attributes, { propertyName: 'content' } !== 'string')
    ) {
      console.error(
        'Value of property "content" on Tooltip component should be a string.',
      );
    }
    return attributes;
  },
  renameMap: {
    place: 'placement',
    containerElement: 'as',
  },
});
