import React, { type ChangeEventHandler, type FocusEventHandler } from 'react';
import {
  Stack,
  type CommonProps,
  type ExpandProps,
} from '@contentful/f36-core';
import { BaseCheckboxGroupContext } from './BaseCheckboxGroupContext';

export interface BaseCheckboxGroupProps extends CommonProps {
  /**
   * Handler that will be triggered when any checkbox inside the group loses focus
   */
  onBlur?: FocusEventHandler<HTMLInputElement>;
  /**
   * Handler that will be triggered when any checkbox inside the group has their checked state changed
   */
  onChange?: ChangeEventHandler<HTMLInputElement>;
  /**
   * Name that will be assigned to all checkboxes inside the group, unless a different name is passed to the checkbox
   */
  name?: string;
  /**
   * Elements that should be in the group
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

export const BaseCheckboxGroupBase = (
  props: ExpandProps<BaseCheckboxGroupProps>,
  ref: React.Ref<HTMLDivElement>,
) => {
  const {
    children,
    className,
    testId = 'cf-ui-base-checkbox-group',
    ...contextProps
  } = props;
  return (
    <BaseCheckboxGroupContext.Provider value={contextProps}>
      <Stack
        ref={ref}
        testId={testId}
        className={className}
        flexDirection="column"
        alignItems="flex-start"
        spacing="spacingXs"
        role="group"
      >
        {children}
      </Stack>
    </BaseCheckboxGroupContext.Provider>
  );
};

BaseCheckboxGroupBase.displayName = 'BaseCheckboxGroup';

export const BaseCheckboxGroup = React.forwardRef(BaseCheckboxGroupBase);
