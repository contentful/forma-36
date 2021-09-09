const { modifyPropsCodemod } = require('./common/modify-props-codemod');
const { pipe } = require('./common/pipe');

module.exports = pipe([
  modifyPropsCodemod({
    componentName: 'Modal',
    renameMap: {},
  }),
  modifyPropsCodemod({
    componentName: 'ModalHeader',
    renameMap: {},
  }),
  modifyPropsCodemod({
    componentName: 'ModalControls',
    renameMap: {},
  }),
  modifyPropsCodemod({
    componentName: 'ModalContent',
    renameMap: {},
  }),
  modifyPropsCodemod({
    componentName: 'ModalConfirm',
    renameMap: {},
  }),
  modifyPropsCodemod({
    componentName: 'ModalLauncher',
    renameMap: {},
  }),
]);
