import React, { useEffect } from 'react';
import { cx } from '@emotion/css';

import { BaseInput, type BaseInputProps } from '../BaseInput';
import { useFormControl } from '../FormControl/FormControlContext';
import { getStyles } from './Textarea.styles';
import type { ExpandProps } from '@contentful/f36-core';

export interface TextareaProps
  extends Omit<BaseInputProps<'textarea'>, 'as' | 'type' | 'size'> {
  /**
   * Set's default value for textarea
   */
  defaultValue?: string;
}

const TextareaBase = (
  {
    className,
    isDisabled,
    isInvalid,
    isRequired,
    isReadOnly,
    onChange,
    testId = 'cf-ui-textarea',
    id,
    resize = 'vertical',
    maxLength,
    value,
    defaultValue,
    ...otherProps
  }: ExpandProps<TextareaProps>,
  ref: React.Ref<HTMLTextAreaElement>,
) => {
  const styles = getStyles();

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
      setInputValue(value ?? defaultValue ?? '');
    }
  }, [defaultValue, maxLength, setInputValue, setMaxLength, value]);

  const handleOnChange = (event) => {
    if (typeof setInputValue === 'function') {
      setInputValue(event.target.value);
    }
    onChange?.(event);
  };

  return (
    <BaseInput
      {...otherProps}
      {...formProps}
      defaultValue={defaultValue}
      value={value}
      testId={testId}
      as="textarea"
      ref={ref}
      className={cx(styles.root, className, {
        [styles.disabled]: isDisabled,
        [styles.error]: isInvalid,
      })}
      maxLength={maxLength}
      resize={resize}
      onChange={maxLength ? handleOnChange : onChange}
    />
  );
};

TextareaBase.displayName = 'Textarea';
/**
 * Textarea is a form component that allows the user to enter a sizeable amount of multi-line plain text.
 */
export const Textarea = React.forwardRef(TextareaBase);
