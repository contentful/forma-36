const { modifyPropsCodemod } = require('./common/modify-props-codemod');

module.exports = modifyPropsCodemod({
  componentName: 'Card',
  renameMap: {
    selected: 'isSelected',
  },
});
