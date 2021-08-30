import React from 'react';
import { BaseCheckboxField } from '../base-checkbox-field';
import type { CheckboxFieldProps as _CheckboxFieldProps } from '../base-checkbox-field/types';

export type RadioProps = _CheckboxFieldProps;

export const _Radio = (
  { testId = 'cf-ui-radio', ...otherProps }: RadioProps,
  ref: React.Ref<HTMLDivElement>,
) => {
  return (
    <BaseCheckboxField testId={testId} {...otherProps} ref={ref} type="radio" />
  );
};

export const Radio = React.forwardRef(_Radio);
