import React from 'react';
import {
  BaseCheckboxGroup,
  BaseCheckboxGroupProps,
} from '../base-checkbox/BaseCheckboxGroup';

export interface CheckboxGroupProps
  extends Omit<BaseCheckboxGroupProps, 'type'> {
  /**
   * Array of values of the checkboxes that should be checked for uncontrolled inputs
   */
  defaultValue?: Array<string>;
  /**
   * Array of values of the checkboxes that should be checked for controlled inputs
   */
  value?: Array<string>;
}

const _CheckboxGroup = (
  props: CheckboxGroupProps,
  ref: React.Ref<HTMLDivElement>,
) => {
  const { children, ...groupProps } = props;
  return (
    <BaseCheckboxGroup ref={ref} type="checkbox" {...groupProps}>
      {children}
    </BaseCheckboxGroup>
  );
};

export const CheckboxGroup = React.forwardRef(_CheckboxGroup);
