import React from 'react';
import { ControlledInput, ControlledInputPropTypes } from '../ControlledInput';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface CheckboxProps extends ControlledInputPropTypes {}

export const Checkbox = ({
  disabled = false,
  required = false,
  testId = 'cf-ui-checkbox',
  type = 'checkbox',
  willBlurOnEsc = true,
  ...otherProps
}: CheckboxProps) => {
  return (
    <ControlledInput
      disabled={disabled}
      required={required}
      data-test-id={testId}
      type={type}
      willBlurOnEsc={willBlurOnEsc}
      {...otherProps}
    />
  );
};
