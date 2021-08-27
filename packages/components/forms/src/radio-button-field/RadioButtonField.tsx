import React from 'react';
import { BaseCheckboxField } from '../base-checkbox-field';
import type { RadioButtonFieldProps as _RadioButtonFieldProps } from '../base-checkbox-field/types';

export type RadioButtonFieldProps = _RadioButtonFieldProps;

export const _RadioButtonField = (
  { testId = 'cf-ui-radio-button-field', ...otherProps }: RadioButtonFieldProps,
  ref: React.Ref<HTMLDivElement>,
) => {
  return (
    <BaseCheckboxField testId={testId} {...otherProps} ref={ref} type="radio" />
  );
};

export const RadioButtonField = React.forwardRef(_RadioButtonField);
