const { modifyPropsCodemod } = require('./common/modify-props-codemod');

module.exports = modifyPropsCodemod({
  componentName: 'Form',
  renameMap: {
    spacing: null,
  },
});
