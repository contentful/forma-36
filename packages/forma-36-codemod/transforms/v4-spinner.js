const { renamePropsCodemod } = require('./common/rename-props-codemod');

module.exports = renamePropsCodemod({
  componentName: 'Spinner',
  renameMap: {
    color: 'variant',
  },
});
