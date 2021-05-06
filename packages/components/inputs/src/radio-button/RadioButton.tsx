import React from 'react';
import { ControlledInput, ControlledInputProps } from '..';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface RadioButtonProps
  extends Omit<ControlledInputProps, 'isIndeterminate'> {}

export const RadioButton = ({
  testId = 'cf-ui-radio-button',
  type = 'radio',
  ...otherProps
}: RadioButtonProps) => {
  return <ControlledInput testId={testId} type={type} {...otherProps} />;
};
