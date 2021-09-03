import React, { ChangeEventHandler } from 'react';
import { RadioGroupContext } from './RadioGroupContext';

export interface RadioGroupProps {
  /**
   * Handler that will be triggered when any Radio inside the group has their checked state changed
   */
  onChange?: ChangeEventHandler<HTMLInputElement>;
  /**
   * Array of values of the Radioes that should start as checked for uncontrolled inputs
   */
  defaultValue?: string | number;
  /**
   * Array of values of the Radioes that should be checked for controlled inputs
   */
  value?: string | number;
  /**
   * Name that will be assigned to all Radioes inside the group, unless a different name is passed to the Radio
   */
  name?: string;
  /**
   * Radioes that should be in the group
   */
  children: React.ReactNode;
}

export const RadioGroup = (props: RadioGroupProps) => {
  const { children, ...contextProps } = props;
  return (
    <RadioGroupContext.Provider value={contextProps}>
      {children}
    </RadioGroupContext.Provider>
  );
};
