import React from 'react';
import { ControlledInput, ControlledInputProps } from '..';

export type RadioButtonProps = Omit<
  ControlledInputProps,
  'isIndeterminate' | 'type'
>;

const _RadioButton = (
  { testId = 'cf-ui-radio-button', ...otherProps }: RadioButtonProps,
  ref: React.Ref<HTMLDivElement>,
) => {
  return (
    <ControlledInput testId={testId} type="radio" ref={ref} {...otherProps} />
  );
};

export const RadioButton = React.forwardRef(_RadioButton);
