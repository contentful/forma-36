import { modifyPropsCodemod } from './common/modify-props-codemod.mjs';
import { pipe } from './common/pipe.mjs';

export default pipe([
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
