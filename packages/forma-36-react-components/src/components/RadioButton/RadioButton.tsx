import React, { FunctionComponent } from 'react';
import ControlledInput, {
  ControlledInputPropTypes,
} from '../ControlledInput/ControlledInput';

export const RadioButton: FunctionComponent<
  ControlledInputPropTypes
> = props => <ControlledInput {...props} type="radio" />;

RadioButton.defaultProps = {
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
  testId: 'cf-ui-radio-button',
};

export default RadioButton;
