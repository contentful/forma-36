import React from 'react';
import { BaseCheckbox, BaseCheckboxProps } from '../BaseCheckbox';
import { useFormControl } from '../FormControl/FormControlContext';
import type { ExpandProps } from '@contentful/f36-core';

export type SwitchProps = Omit<BaseCheckboxProps, 'type' | 'isIndeterminate'>;

const SwitchBase = (
  props: ExpandProps<SwitchProps>,
  ref: React.Ref<HTMLInputElement>,
) => {
  const {
    testId = 'cf-ui-switch',
    id,
    isDisabled,
    isInvalid,
    isRequired,
    children,
    ...otherProps
  } = props;

  // Removes the not needed properties that comes from FormControl context.
  const {
    inputValue,
    setInputValue,
    maxLength,
    setMaxLength,
    isReadOnly,
    ...formProps
  } = useFormControl({
    id,
    isDisabled,
    isInvalid,
    isRequired,
  });

  return (
    <BaseCheckbox
      {...formProps}
      {...otherProps}
      testId={testId}
      type="switch"
      ref={ref}
    >
      {children}
    </BaseCheckbox>
  );
};

SwitchBase.displayName = 'Switch';

export const Switch = React.forwardRef(SwitchBase);
