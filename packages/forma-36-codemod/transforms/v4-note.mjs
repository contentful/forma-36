import { modifyPropsCodemod } from './common/modify-props-codemod.mjs';

export default modifyPropsCodemod({
  componentName: 'Note',
  renameMap: {
    noteType: 'variant',
    hasCloseButton: 'withCloseButton',
  },
});
