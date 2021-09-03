import React, { ChangeEventHandler } from 'react';
import { CheckboxGroupContext } from './CheckboxGroupContext';

export interface CheckboxGroupProps {
  /**
   * Handler that will be triggered when any checkbox inside the group has their checked state changed
   */
  onChange?: ChangeEventHandler<HTMLInputElement>;
  /**
   * Array of values of the checkboxes that should start as checked for uncontrolled inputs
   */
  defaultValue?: Array<string | number>;
  /**
   * Array of values of the checkboxes that should be checked for controlled inputs
   */
  value?: Array<string | number>;
  /**
   * Name that will be assigned to all checkboxes inside the group, unless a different name is passed to the checkbox
   */
  name?: string;
  /**
   * Checkboxes that should be in the group
   */
  children: React.ReactNode;
}

export const CheckboxGroup = (props: CheckboxGroupProps) => {
  const { children, ...contextProps } = props;
  return (
    <CheckboxGroupContext.Provider value={contextProps}>
      {children}
    </CheckboxGroupContext.Provider>
  );
};
