const { modifyPropsCodemod } = require('./common/modify-props-codemod');
const { pipe } = require('./common/pipe');

module.exports = pipe([
  modifyPropsCodemod({
    componentName: 'Table',
    renameMap: {},
  }),
  modifyPropsCodemod({
    componentName: 'TableBody',
    renameMap: {},
  }),
  modifyPropsCodemod({
    componentName: 'TableRow',
    renameMap: {
      selected: 'isSelected',
    },
  }),
  modifyPropsCodemod({
    componentName: 'TableCell',
    renameMap: {},
  }),
  modifyPropsCodemod({
    componentName: 'TableBody',
    renameMap: {},
  }),
]);
