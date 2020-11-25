import React from 'react';
import ControlledInput, { ControlledInputPropTypes } from '../ControlledInput';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface CheckboxProps extends ControlledInputPropTypes {}

const defaultProps: Partial<CheckboxProps> = {
  required: false,
  disabled: false,
  type: 'checkbox',
  testId: 'ctf-ui-checkbox',
  willBlurOnEsc: true,
};

export const Checkbox = (props: CheckboxProps) => {
  return <ControlledInput {...props} />;
};

Checkbox.defaultProps = defaultProps;

export default Checkbox;
