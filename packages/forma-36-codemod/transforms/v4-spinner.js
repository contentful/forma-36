const { modifyPropsCodemod } = require('./common/modify-props-codemod');

module.exports = modifyPropsCodemod({
  componentName: 'Spinner',
  renameMap: {
    color: 'variant',
  },
});
