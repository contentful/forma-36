import React from 'react';

import { ControlledInput, ControlledInputProps } from '..';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface CheckboxProps extends ControlledInputProps {}

export const Checkbox = ({
  testId = 'cf-ui-checkbox',
  type = 'checkbox',
  ...otherProps
}: CheckboxProps) => {
  return <ControlledInput testId={testId} type={type} {...otherProps} />;
};
