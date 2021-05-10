import React from 'react';
import { ControlledInputField } from '../controlled-input-field';
import type { ControlledInputFieldProps } from '../controlled-input-field';

export type CheckboxFieldProps = Omit<
  ControlledInputFieldProps,
  'inputType' | 'ref'
>;

export const _CheckboxField = ({
  testId = 'cf-ui-checkbox-field',
  ...otherProps
}: CheckboxFieldProps) => {
  return (
    <ControlledInputField
      testId={testId}
      {...otherProps}
      inputType="checkbox"
    />
  );
};

export const CheckboxField = React.forwardRef(_CheckboxField);
