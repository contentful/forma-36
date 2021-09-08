import React from 'react';
import {
  BaseCheckboxGroup,
  BaseCheckboxGroupProps,
} from '../base-checkbox/BaseCheckboxGroup';

export interface RadioGroupProps extends Omit<BaseCheckboxGroupProps, 'type'> {
  /**
   * Value of the radio that should be checked for uncontrolled inputs
   */
  defaultValue?: string;
  /**
   * Value of the radio that should be checked for controlled inputs
   */
  value?: string;
}

const _RadioGroup = (
  props: RadioGroupProps,
  ref: React.Ref<HTMLDivElement>,
) => {
  const { children, ...groupProps } = props;

  return (
    <BaseCheckboxGroup ref={ref} type="radio" {...groupProps}>
      {children}
    </BaseCheckboxGroup>
  );
};

export const RadioGroup = React.forwardRef(_RadioGroup);
