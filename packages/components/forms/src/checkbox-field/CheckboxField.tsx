import React from 'react';
import { ControlledInputField } from '..';
import type { ControlledInputFieldProps } from '..';

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
