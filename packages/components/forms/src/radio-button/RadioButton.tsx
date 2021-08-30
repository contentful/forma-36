import React from 'react';
import { BaseCheckbox } from '../base-checkbox';
import type { RadioButtonProps as _RadioBuuttonProps } from '../base-checkbox/types';

export type RadioButtonProps = _RadioBuuttonProps;

const _RadioButton = (
  { testId = 'cf-ui-radio-button', ...otherProps }: RadioButtonProps,
  ref: React.Ref<HTMLLabelElement>,
) => {
  return (
    <BaseCheckbox testId={testId} type="radio" ref={ref} {...otherProps} />
  );
};

export const RadioButton = React.forwardRef(_RadioButton);
