import React, { useRef, useEffect } from 'react';
import { BaseInput } from '../BaseInput-1';
import { TextInputProps } from './types';
import { useFormControl } from '../FormControl-1/FormControlContext';
import { ExpandProps } from '@contentful/f36-core';

export const _TextInput = (
  {
    className,
    testId = 'cf-ui-text-input',
    id,
    value,
    defaultValue,
    onChange,
    onFocus,
    isInvalid,
    isDisabled,
    isRequired,
    isReadOnly,
    size = 'medium',
    maxLength,
    ...otherProps
  }: ExpandProps<TextInputProps>,
  ref: React.RefObject<HTMLInputElement>,
) => {
  const {
    setMaxLength,
    maxLength: contextMaxLength,
    setInputValue,
    inputValue: contextInputValue,
    ...formProps
  } = useFormControl({
    id,
    isInvalid,
    isDisabled,
    isRequired,
    isReadOnly,
  });

  useEffect(() => {
    if (maxLength !== undefined && typeof setMaxLength === 'function') {
      setMaxLength(maxLength);
    }
  }, [maxLength, setMaxLength]);

  const handleOnChange = (event) => {
    if (typeof setInputValue === 'function') {
      setInputValue(event.target.value);
    }
    onChange?.(event);
  };

  const inputRef = useRef<HTMLInputElement>(null);
  const finalRef = ref || inputRef;

  return (
    <BaseInput
      type="text"
      {...otherProps}
      {...formProps}
      testId={testId}
      ref={finalRef}
      onChange={maxLength ? handleOnChange : onChange}
      onFocus={onFocus}
      as="input"
      className={className}
      value={value}
      defaultValue={defaultValue}
      size={size}
      maxLength={maxLength}
    />
  );
};

export const TextInput = React.forwardRef(_TextInput);
