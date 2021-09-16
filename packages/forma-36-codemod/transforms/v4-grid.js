const { modifyPropsCodemod } = require('./common/modify-props-codemod');
const { pipe } = require('./common/pipe');

module.exports = pipe([
  modifyPropsCodemod({
    componentName: 'Grid',
    renameMap: {
      inline: 'isInline',
    },
  }),
  modifyPropsCodemod({
    componentName: 'GridItem',
    renameMap: {
      htmlTag: 'as',
    },
  }),
]);
