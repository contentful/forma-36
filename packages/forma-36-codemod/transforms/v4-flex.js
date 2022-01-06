const { updatePropertyValue } = require('../utils');

const { modifyPropsCodemod } = require('./common/modify-props-codemod');

module.exports = modifyPropsCodemod({
  componentName: 'Flex',
  beforeRename: (attributes, { j }) => {
    return updatePropertyValue(attributes, {
      j,
      propertyName: 'noShrink',
      propertyValue: () => {
        return j.jsxExpressionContainer(j.literal(0));
      },
    });
  },
  renameMap: {
    htmlTag: 'as',
    inlineFlex: 'isInline',
    noShrink: 'flexShrink',
  },
});
