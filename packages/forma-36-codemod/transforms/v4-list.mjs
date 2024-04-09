import { modifyPropsCodemod } from './common/modify-props-codemod.mjs';
import { pipe } from './common/pipe.mjs';

export default pipe([
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
