import { modifyPropsCodemod } from './common/modify-props-codemod.mjs';
import { pipe } from './common/pipe.mjs';

export default pipe([
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
