const { modifyPropsCodemod } = require('./common/modify-props-codemod');

module.exports = modifyPropsCodemod({
  componentName: 'Note',
  renameMap: {
    noteType: 'variant',
    hasCloseButton: 'withCloseButton',
  },
});
