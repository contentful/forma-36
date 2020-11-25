import React from 'react';
import ControlledInput, { ControlledInputPropTypes } from '../ControlledInput';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface RadioButtonProps extends ControlledInputPropTypes {}

const defaultProps: Partial<RadioButtonProps> = {
  required: false,
  disabled: false,
  type: 'radio',
  testId: 'cf-ui-radio-button',
  willBlurOnEsc: true,
};

export const RadioButton = (props: RadioButtonProps) => {
  return <ControlledInput {...props} />;
};

RadioButton.defaultProps = defaultProps;

export default RadioButton;
