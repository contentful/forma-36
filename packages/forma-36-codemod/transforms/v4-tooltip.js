const { modifyPropsCodemod } = require('./common/modify-props-codemod');

module.exports = modifyPropsCodemod({
  componentName: 'Tooltip',
  renameMap: {
    place: 'placement',
    containerElement: 'as',
  },
});
