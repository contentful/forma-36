const { modifyPropsCodemod } = require('./common/modify-props-codemod');
const { pipe } = require('./common/pipe');
const { renameProperties, hasProperty } = require('../utils');

const checkControlledOrUncontrolled = (attributes) => {
  const hasOnChange = hasProperty(attributes, { propertyName: 'onChange' });
  const hasValue = hasProperty(attributes, { propertyName: 'value' });
  if (!hasOnChange && !hasValue) {
    return attributes;
  }

  if (hasValue && !hasOnChange) {
    return renameProperties(attributes, {
      renameMap: {
        value: 'defaultValue',
      },
    });
  }

  return attributes;
};

module.exports = pipe([
  modifyPropsCodemod({
    componentName: 'TextInput',
    renameMap: {
      error: 'isInvalid',
      inputRef: 'ref',
      disabled: 'isDisabled',
      required: 'isRequired',
      labelText: 'aria-label',
      readOnly: 'isReadOnly',
      width: null,
    },
    afterRename: checkControlledOrUncontrolled,
  }),
  modifyPropsCodemod({
    componentName: 'Textarea',
    renameMap: {
      error: 'isInvalid',
      inputRef: 'ref',
      disabled: 'isDisabled',
      required: 'isRequired',
      labelText: 'aria-label',
      readOnly: 'isReadOnly',
      width: null,
    },
    afterRename: checkControlledOrUncontrolled,
  }),
]);
