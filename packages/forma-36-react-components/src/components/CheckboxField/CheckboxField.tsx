import React from 'react';
import { ControlledInputField } from '@contentful/f36-forms';
import type { ControlledInputFieldProps } from '@contentful/f36-forms';

export type CheckboxFieldProps = Omit<
  ControlledInputFieldProps,
  'inputType' | 'ref'
>;

export const CheckboxField = ({
  isChecked = false,
  isLabelLight = false,
  testId = 'cf-ui-checkbox-field',
  ...otherProps
}: CheckboxFieldProps) => {
  return (
    <ControlledInputField
      isChecked={isChecked}
      isLabelLight={isLabelLight}
      testId={testId}
      {...otherProps}
      inputType="checkbox"
    />
  );
};
