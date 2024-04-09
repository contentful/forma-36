import { modifyPropsCodemod } from './common/modify-props-codemod.mjs';

export default modifyPropsCodemod({
  componentName: 'Tooltip',
  renameMap: {
    place: 'placement',
    containerElement: 'as',
  },
});
