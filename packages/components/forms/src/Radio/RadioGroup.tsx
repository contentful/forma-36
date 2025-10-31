import React from 'react';
import {
  BaseCheckboxGroup,
  BaseCheckboxGroupProps,
} from '../BaseCheckbox/BaseCheckboxGroup';

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

export const RadioGroupBase = (
  props: RadioGroupProps,
  ref: React.Ref<HTMLDivElement>,
) => {
  const { children, testId = 'cf-ui-radio-group', ...groupProps } = props;
  return (
    <BaseCheckboxGroup ref={ref} testId={testId} type="radio" {...groupProps}>
      {children}
    </BaseCheckboxGroup>
  );
};

RadioGroupBase.displayName = 'RadioGroup';

export const RadioGroup = React.forwardRef(RadioGroupBase);
