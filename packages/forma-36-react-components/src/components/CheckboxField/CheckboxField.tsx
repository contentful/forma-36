import React from 'react';
import { ControlledInputField } from '@contentful/f36-forms';
import type { ControlledInputFieldProps } from '@contentful/f36-forms';

export type CheckboxFieldProps = Omit<ControlledInputFieldProps, 'inputType'>;

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
