import React from 'react';
import { BaseCheckboxField } from '../base-checkbox-field';
import type { SwitchFieldProps as _SwitchFieldProps } from '../base-checkbox-field/types';

export type SwitchFieldProps = _SwitchFieldProps;

export const _SwitchField = (
  { testId = 'cf-ui-switch-field', ...otherProps }: SwitchFieldProps,
  ref: React.Ref<HTMLDivElement>,
) => {
  return (
    <BaseCheckboxField
      testId={testId}
      {...otherProps}
      ref={ref}
      type="switch"
    />
  );
};

export const SwitchField = React.forwardRef(_SwitchField);
