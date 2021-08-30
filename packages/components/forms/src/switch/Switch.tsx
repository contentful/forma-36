import React from 'react';
import { BaseCheckbox } from '../base-checkbox';
import type { SwitchProps as _SwitchProps } from '../base-checkbox/types';

export type SwitchProps = _SwitchProps;

export const _Switch = (
  { testId = 'cf-ui-switch', ...otherProps }: SwitchProps,
  ref: React.Ref<HTMLLabelElement>,
) => {
  return (
    <BaseCheckbox testId={testId} type="switch" ref={ref} {...otherProps} />
  );
};

export const Switch = React.forwardRef(_Switch);
