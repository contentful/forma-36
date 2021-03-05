import React from 'react';
import { ControlledInput, ControlledInputPropTypes } from '../ControlledInput';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface RadioButtonProps extends ControlledInputPropTypes {}

export const RadioButton = ({
  disabled = false,
  required = false,
  testId = 'cf-ui-radio-button',
  type = 'radio',
  willBlurOnEsc = true,
  ...otherProps
}: RadioButtonProps) => {
  return (
    <ControlledInput
      {...otherProps}
      disabled={disabled}
      required={required}
      data-test-id={testId}
      type={type}
      willBlurOnEsc={willBlurOnEsc}
    />
  );
};
