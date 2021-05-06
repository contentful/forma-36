import React from 'react';
import { ControlledInputField } from '@contentful/f36-forms';
import type { ControlledInputFieldProps } from '@contentful/f36-forms';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export type RadioButtonFieldProps = Omit<
  ControlledInputFieldProps,
  'inputType'
>;

export const RadioButtonField = ({
  checked = false,
  labelIsLight = false,
  testId = 'cf-ui-radio-button-field',
  ...otherProps
}: RadioButtonFieldProps) => {
  return (
    <ControlledInputField
      checked={checked}
      labelIsLight={labelIsLight}
      testId={testId}
      {...otherProps}
      inputType="radio"
    />
  );
};
