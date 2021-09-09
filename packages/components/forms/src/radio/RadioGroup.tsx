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

export const RadioGroup = (props: RadioGroupProps) => {
  const { children, testId = 'cf-ui-radio-group', ...groupProps } = props;
  return (
    <BaseCheckboxGroup testId={testId} type="radio" {...groupProps}>
      {children}
    </BaseCheckboxGroup>
  );
};
