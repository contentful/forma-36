import React from 'react';
import { BaseCheckbox } from '../base-checkbox';
import type { CheckboxProps as _CheckboxProps } from '../base-checkbox/types';

export type CheckboxProps = _CheckboxProps;

export const _Checkbox = (
  { testId = 'cf-ui-checkbox', ...otherProps }: CheckboxProps,
  ref: React.Ref<HTMLLabelElement>,
) => {
  return (
    <BaseCheckbox testId={testId} type="checkbox" ref={ref} {...otherProps} />
  );
};

export const Checkbox = React.forwardRef(_Checkbox);
