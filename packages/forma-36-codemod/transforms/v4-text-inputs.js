const { modifyPropsCodemod } = require('./common/modify-props-codemod');
const { pipe } = require('./common/pipe');

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
    },
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
    },
  }),
]);
