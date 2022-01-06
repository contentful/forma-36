const { modifyPropsCodemod } = require('./common/modify-props-codemod');
const { updatePropertyValue } = require('../utils');

module.exports = modifyPropsCodemod({
  componentName: 'Spinner',
  beforeRename: (attributes, { j }) => {
    return updatePropertyValue(attributes, {
      j,
      propertyName: 'size',
      propertyValue: (value) => {
        if (value.value === 'default') {
          return j.literal('medium');
        }
        return value;
      },
    });
  },
  renameMap: {
    color: 'variant',
  },
});
