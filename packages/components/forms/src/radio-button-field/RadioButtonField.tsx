import React from 'react';
import { ControlledInputField } from '../controlled-input-field';
import type { ControlledInputFieldProps } from '../controlled-input-field';

export type RadioButtonFieldProps = Omit<
  ControlledInputFieldProps,
  'inputType'
>;

export const _RadioButtonField = (
  { testId = 'cf-ui-radio-button-field', ...otherProps }: RadioButtonFieldProps,
  ref: React.Ref<HTMLDivElement>,
) => {
  return (
    <ControlledInputField
      testId={testId}
      {...otherProps}
      ref={ref}
      inputType="radio"
    />
  );
};

export const RadioButtonField = React.forwardRef(_RadioButtonField);
