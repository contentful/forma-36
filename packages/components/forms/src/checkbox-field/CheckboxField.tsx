import React from 'react';
import { BaseCheckboxField } from '../base-checkbox-field';
import type { CheckboxFieldProps as _CheckboxFieldProps } from '../base-checkbox-field/types';

export type CheckboxFieldProps = _CheckboxFieldProps;

export const _CheckboxField = (
  { testId = 'cf-ui-checkbox-field', ...otherProps }: CheckboxFieldProps,
  ref: React.Ref<HTMLDivElement>,
) => {
  return (
    <BaseCheckboxField
      testId={testId}
      {...otherProps}
      ref={ref}
      type="checkbox"
    />
  );
};

export const CheckboxField = React.forwardRef(_CheckboxField);
