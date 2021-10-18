import React, { useRef, useEffect } from 'react';
import { BaseInput } from '../base-input';
import { Flex } from '@contentful/f36-core';
import { CopyButton } from '@contentful/f36-copybutton';
import getStyles from './TextInput.styles';
import { cx } from 'emotion';
import { TextInputProps } from './types';
import { useFormControl } from '../form-control/FormControlContext';

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
    withCopyButton,
    onCopy,
    size = 'medium',
    maxLength,
    ...otherProps
  }: TextInputProps,
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
  const styles = getStyles();

  const copyButtonStyles = cx(styles.copyButton, {
    [styles.disabled]: Boolean(isDisabled),
    [styles.invalid]: Boolean(isInvalid),
  });

  const handleCopy = React.useCallback(
    (e) => {
      if (onCopy) {
        onCopy(e);
      }

      finalRef.current.select();
      document.execCommand('copy');
    },
    [onCopy, finalRef],
  );

  const input = (inputClass?: string) => {
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
        className={inputClass}
        value={value}
        defaultValue={defaultValue}
        size={size}
        maxLength={maxLength}
      />
    );
  };

  const inputWithCopyButton = (
    <Flex className={className}>
      {input(styles.inputWithCopyButton)}
      <CopyButton
        value={finalRef?.current?.value}
        onCopy={handleCopy}
        className={copyButtonStyles}
        isDisabled={isDisabled}
        size={size}
      />
    </Flex>
  );

  return (
    <Flex flexDirection="column" fullWidth className={className}>
      {withCopyButton ? inputWithCopyButton : input()}
    </Flex>
  );
};

export const TextInput = React.forwardRef(_TextInput);
