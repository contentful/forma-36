import React from 'react';
import { ControlledInputField } from '@contentful/f36-forms';
import type { ControlledInputFieldProps } from '@contentful/f36-forms';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export type RadioButtonFieldProps = Omit<
  ControlledInputFieldProps,
  'inputType' | 'ref'
>;

export const RadioButtonField = ({
  isChecked = false,
  isLabelLight = false,
  testId = 'cf-ui-radio-button-field',
  ...otherProps
}: RadioButtonFieldProps) => {
  return (
    <ControlledInputField
      isChecked={isChecked}
      isLabelLight={isLabelLight}
      testId={testId}
      {...otherProps}
      inputType="radio"
    />
  );
};
