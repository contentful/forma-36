import { updatePropertyValue } from '../utils/index.mjs';

import { modifyPropsCodemod } from './common/modify-props-codemod.mjs';

export default modifyPropsCodemod({
  componentName: 'Flex',
  beforeRename: (attributes, { j }) => {
    return updatePropertyValue(attributes, {
      j,
      propertyName: 'noShrink',
      propertyValue: () => {
        return j.jsxExpressionContainer(j.literal(0));
      },
    });
  },
  renameMap: {
    htmlTag: 'as',
    inlineFlex: 'isInline',
    noShrink: 'flexShrink',
  },
});
