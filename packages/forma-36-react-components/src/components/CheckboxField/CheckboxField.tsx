import React from 'react';
import ControlledInputField from '../ControlledInputField';
import type { ControlledInputFieldPropTypes } from '../ControlledInputField';

export type CheckboxFieldProps = Omit<
  ControlledInputFieldPropTypes,
  'inputType'
>;

export const CheckboxField = ({
  checked = false,
  labelIsLight = false,
  testId = 'cf-ui-checkbox-field',
  ...otherProps
}: CheckboxFieldProps) => {
  return (
    <ControlledInputField
      checked={checked}
      labelIsLight={labelIsLight}
      testId={testId}
      {...otherProps}
      inputType="checkbox"
    />
  );
};

export default CheckboxField;
