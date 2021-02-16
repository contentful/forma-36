import React from 'react';
import ControlledInput, { ControlledInputProps } from '../ControlledInput';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface CheckboxProps extends ControlledInputProps {}

export const Checkbox = ({
  disabled = false,
  required = false,
  testId = 'ctf-ui-checkbox',
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

export default Checkbox;
