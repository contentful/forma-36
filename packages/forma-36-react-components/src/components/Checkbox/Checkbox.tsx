import React, { FunctionComponent } from 'react';
import ControlledInput, {
  ControlledInputPropTypes,
} from '../ControlledInput/ControlledInput';

export const Checkbox: FunctionComponent<ControlledInputPropTypes> = props => (
  <ControlledInput type="checkbox" {...props} />
);

Checkbox.defaultProps = {
  id: undefined,
  extraClassNames: undefined,
  onChange: undefined,
  onBlur: undefined,
  onFocus: undefined,
  checked: undefined,
  value: undefined,
  name: undefined,
  required: false,
  disabled: false,
  type: 'checkbox',
  testId: 'ctf-ui-checkbox',
};

export default Checkbox;
