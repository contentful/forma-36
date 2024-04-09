import { modifyPropsCodemod } from './common/modify-props-codemod.mjs';
import { updatePropertyValue } from '../utils/index.mjs';

export default modifyPropsCodemod({
  componentName: 'Spinner',
  beforeRename: (attributes, { j }) => {
    return updatePropertyValue(attributes, {
      j,
      propertyName: 'size',
      propertyValue: (value) => {
        if (value.value === 'default') {
          return j.literal('medium');
        }
        return value;
      },
    });
  },
  renameMap: {
    color: 'variant',
  },
});
