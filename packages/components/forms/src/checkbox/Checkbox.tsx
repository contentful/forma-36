import React from 'react';
import { BaseCheckboxField } from '../base-checkbox-field';
import type { CheckboxFieldProps as _CheckboxFieldProps } from '../base-checkbox-field/types';

export type CheckboxProps = _CheckboxFieldProps;

export const _Checkbox = (
  { testId = 'cf-ui-checkbox', ...otherProps }: CheckboxProps,
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

export const Checkbox = React.forwardRef(_Checkbox);
