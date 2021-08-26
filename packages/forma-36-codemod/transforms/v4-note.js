const { renamePropsCodemod } = require('./common/rename-props-codemod');

module.exports = renamePropsCodemod({
  componentName: 'Note',
  renameMap: {
    noteType: 'variant',
    hasCloseButton: 'withCloseButton',
  },
});
