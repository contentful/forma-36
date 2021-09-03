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

export const CheckboxGroup = (props: CheckboxGroupProps) => {
  const { children, ...groupProps } = props;
  return (
    <BaseCheckboxGroup type="checkbox" {...groupProps}>
      {children}
    </BaseCheckboxGroup>
  );
};
