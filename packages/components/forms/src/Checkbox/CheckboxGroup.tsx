import React from 'react';
import {
  BaseCheckboxGroup,
  BaseCheckboxGroupProps,
} from '../BaseCheckbox/BaseCheckboxGroup';
import type { ExpandProps } from '@contentful/f36-core';

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

export const CheckboxGroupBase = (
  props: ExpandProps<CheckboxGroupProps>,
  ref: React.Ref<HTMLDivElement>,
) => {
  const { children, testId = 'cf-ui-checkbox-group', ...otherProps } = props;
  return (
    <BaseCheckboxGroup
      ref={ref}
      testId={testId}
      type="checkbox"
      {...otherProps}
    >
      {children}
    </BaseCheckboxGroup>
  );
};

CheckboxGroupBase.displayName = 'CheckboxGroup';

export const CheckboxGroup = React.forwardRef(CheckboxGroupBase);
