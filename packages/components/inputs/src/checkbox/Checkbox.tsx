import React from 'react';

import { ControlledInput, ControlledInputProps } from '..';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface CheckboxProps extends ControlledInputProps {}

export const Checkbox = ({
  isDisabled = false,
  isRequired = false,
  testId = 'cf-ui-checkbox',
  type = 'checkbox',
  willBlurOnEsc = true,
  ...otherProps
}: CheckboxProps) => {
  return (
    <ControlledInput
      isDisabled={isDisabled}
      isRequired={isRequired}
      data-test-id={testId}
      type={type}
      willBlurOnEsc={willBlurOnEsc}
      {...otherProps}
    />
  );
};
