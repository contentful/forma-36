import React from 'react';
import { BaseInput } from '../base-input';
import { Flex, useForwardedRef } from '@contentful/f36-core';
import { CopyButton } from '@contentful/f36-copybutton';
import getStyles from './TextInput.styles';
import { cx } from 'emotion';
import { TextInputProps } from './types';

export const _TextInput = (
  {
    className,
    testId = 'cf-ui-text-input',
    label,
    id,
    value,
    defaultValue,
    onChange,
    isInvalid,
    isDisabled,
    withCopyButton,
    onCopy,
    ...otherProps
  }: TextInputProps,
  ref: React.Ref<HTMLInputElement>,
) => {
  const textInputRef = useForwardedRef<HTMLInputElement>(ref);
  const styles = getStyles();

  const copyButtonStyles = cx(styles.copyButton, {
    [styles.disabled]: Boolean(isDisabled),
    [styles.invalid]: Boolean(isInvalid),
  });

  const handleCopy = (e) => {
    if (onCopy) {
      onCopy(e);
    }

    textInputRef.current.select();
    document.execCommand('copy');
  };

  const inputWithCopyButton = (
    <Flex className={className}>
      <BaseInput
        {...otherProps}
        testId={testId}
        ref={textInputRef}
        label={label}
        type="text"
        onChange={onChange}
        as="input"
        className={styles.inputWithCopyButton}
        isDisabled={isDisabled}
        isInvalid={isInvalid}
        value={value}
        defaultValue={defaultValue}
      />
      <CopyButton
        value={textInputRef?.current?.value}
        onCopy={handleCopy}
        className={copyButtonStyles}
        isDisabled={isDisabled}
      />
    </Flex>
  );

  return (
    <Flex flexDirection="column" fullWidth className={className}>
      {withCopyButton ? (
        inputWithCopyButton
      ) : (
        <BaseInput
          {...otherProps}
          testId={testId}
          ref={textInputRef}
          label={label}
          type="text"
          onChange={onChange}
          as="input"
          isDisabled={isDisabled}
          isInvalid={isInvalid}
          value={value}
          defaultValue={defaultValue}
        />
      )}
    </Flex>
  );
};

export const TextInput = React.forwardRef(_TextInput);
