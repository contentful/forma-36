const { modifyPropsCodemod } = require('./common/modify-props-codemod');
const { pipe } = require('./common/pipe');

module.exports = pipe([
  modifyPropsCodemod({
    componentName: 'SkeletonContainer',
    renameMap: {
      animate: 'isAnimated',
    },
  }),
  modifyPropsCodemod({
    componentName: 'SkeletonRow',
    renameMap: {},
  }),
  modifyPropsCodemod({
    componentName: 'SkeletonBodyText',
    renameMap: {},
  }),
  modifyPropsCodemod({
    componentName: 'SkeletonDisplayText',
    renameMap: {},
  }),
  modifyPropsCodemod({
    componentName: 'SkeletonImage',
    renameMap: {},
  }),
  modifyPropsCodemod({
    componentName: 'SkeletonText',
    renameMap: {},
  }),
]);
