import React from 'react';

import { ControlledInputField } from '../ControlledInputField';
import type { ControlledInputFieldPropTypes } from '../ControlledInputField';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export type RadioButtonFieldProps = Omit<
  ControlledInputFieldPropTypes,
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
