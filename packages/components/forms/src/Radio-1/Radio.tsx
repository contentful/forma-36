import React from 'react';
import { useId, ExpandProps } from '@contentful/f36-core';
import { BaseCheckbox, BaseCheckboxProps } from '../BaseCheckbox-1';
import { useFormControl } from '../FormControl-1/FormControlContext';
import { useBaseCheckboxGroup } from '../BaseCheckbox-1/BaseCheckboxGroupContext';

export type RadioProps = Omit<
  BaseCheckboxProps,
  'type' | 'isIndeterminate' | 'size'
>;

const _Radio = (
  props: ExpandProps<RadioProps>,
  ref: React.Ref<HTMLInputElement>,
) => {
  const {
    testId = 'cf-ui-radio-button',
    id,
    isDisabled,
    isInvalid,
    isRequired,
    children,
    onBlur,
    onChange,
    defaultChecked,
    isChecked,
    value,
    name,
    ...otherProps
  } = props;

  const inputId = useId(id, 'radio');

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
      {...otherProps}
      {...groupProps}
      type="radio"
      testId={testId}
      ref={ref}
    >
      {children}
    </BaseCheckbox>
  );
};

export const Radio = React.forwardRef(_Radio);
