const { modifyPropsCodemod } = require('./common/modify-props-codemod');
const { pipe } = require('./common/pipe');

module.exports = pipe([
  modifyPropsCodemod({
    componentName: 'List',
    renameMap: {
      element: 'as',
    },
  }),
  modifyPropsCodemod({
    componentName: 'ListItem',
    renameMap: {},
  }),
]);
