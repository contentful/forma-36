const { updatePropertyValue } = require('../utils');

const { modifyPropsCodemod } = require('./common/modify-props-codemod');

module.exports = modifyPropsCodemod({
  componentName: 'Flex',
  renameMap: {
    htmlTag: 'as',
    inlineFlex: 'isInline',
    noShrink: 'flexShrink',
  },
  modifyFn: (attributes, j) => {
    return updatePropertyValue(attributes, {
      j,
      propertyName: 'flexShrink',
      propertyValue: () => {
        return j.jsxExpressionContainer(j.literal(0));
      },
    });
  },
});
