import React, { ChangeEventHandler } from 'react';
import { Flex } from '@contentful/f36-core';
import { BaseCheckboxGroupContext } from './BaseCheckboxGroupContext';

export interface BaseCheckboxGroupProps {
  /**
   * Handler that will be triggered when any checkbox inside the group has their checked state changed
   */
  onChange?: ChangeEventHandler<HTMLInputElement>;
  /**
   * Name that will be assigned to all checkboxes inside the group, unless a different name is passed to the checkbox
   */
  name?: string;
  /**
   * Checkboxes that should be in the group
   */
  children: React.ReactNode;
  /**
   * Type of the inputs used within the group
   */
  type: 'checkbox' | 'radio';
  /**
   * Array of values for checkboxes or single value for radio, that should be checked for uncontrolled inputs
   */
  defaultValue?: Array<string> | string;
  /**
   * Array of values for checkboxes or single value for radio, that should be checked for controlled inputs
   */
  value?: Array<string> | string;
}

export const BaseCheckboxGroup = (props: BaseCheckboxGroupProps) => {
  const { children, ...contextProps } = props;
  return (
    <BaseCheckboxGroupContext.Provider value={contextProps}>
      <Flex flexDirection="column">{children}</Flex>
    </BaseCheckboxGroupContext.Provider>
  );
};
