import React from 'react';
import { useId, type ExpandProps } from '@contentful/f36-core';
import { BaseCheckbox, BaseCheckboxProps } from '../BaseCheckbox';
import { useFormControl } from '../FormControl/FormControlContext';
import { useBaseCheckboxGroup } from '../BaseCheckbox/BaseCheckboxGroupContext';

export type CheckboxProps = Omit<BaseCheckboxProps, 'type' | 'size'>;

const CheckboxBase = (
  props: ExpandProps<CheckboxProps>,
  ref: React.Ref<HTMLInputElement>,
) => {
  const {
    testId = 'cf-ui-checkbox',
    id,
    isDisabled,
    isRequired,
    isInvalid,
    children,
    onBlur,
    onChange,
    defaultChecked,
    isChecked,
    value,
    name,
    ...otherProps
  } = props;

  const inputId = useId(id, 'checkbox');

  const groupProps = useBaseCheckboxGroup({
    onBlur,
    onChange,
    value,
    defaultChecked,
    isChecked,
    name,
  });

  // Removes the not needed properties that comes from FormControl context.
  const {
    inputValue,
    setInputValue,
    maxLength,
    setMaxLength,
    isReadOnly,
    ...formProps
  } = useFormControl({
    id: inputId,
    isDisabled,
    isInvalid,
    isRequired,
  });

  return (
    <BaseCheckbox
      {...formProps}
      {...groupProps}
      {...otherProps}
      type="checkbox"
      testId={testId}
      ref={ref}
    >
      {children}
    </BaseCheckbox>
  );
};

CheckboxBase.displayName = 'CheckboxBase';
export const Checkbox = React.forwardRef(CheckboxBase);
