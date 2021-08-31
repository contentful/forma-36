import React, { useState, ChangeEvent } from 'react';
import { BaseInput } from '../base-input';
import { Box, Flex } from '@contentful/f36-core';
import { HelpText } from '@contentful/f36-helptext';
import { CopyButton } from '@contentful/f36-copybutton';
import getStyles from './TextInput.styles';
import { TextInputProps } from './types';
import { cx } from 'emotion';

export const _TextInput = (
  {
    className,
    testId = 'cf-ui-text-input',
    countCharacters = false,
    label,
    id,
    value,
    onChange,
    maxLength,
    isInvalid,
    isDisabled,
    withCopyButton,
    onCopy,
    ...otherProps
  }: TextInputProps,
  ref: React.Ref<HTMLInputElement>,
) => {
  const [valueState, setValueState] = useState<string | undefined>(value);
  const styles = getStyles();

  // Store a copy of the value in state.
  // This is used by this component when the `countCharacters`
  // option is on
  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValueState(e.target.value);
    if (onChange) onChange(e);
  };

  const copyButtonStyles = cx(styles.copyButton, {
    [styles.disabled]: Boolean(isDisabled),
    [styles.invalid]: Boolean(isInvalid),
  });

  const inputWithCopyButton = (
    <Flex className={className}>
      <BaseInput
        {...otherProps}
        testId={testId}
        ref={ref}
        label={label}
        type="text"
        onChange={handleOnChange}
        as="input"
        maxLength={maxLength}
        className={styles.inputWithCopyButton}
      />
      <CopyButton
        value={valueState}
        onCopy={onCopy}
        className={copyButtonStyles}
      />
    </Flex>
  );

  return (
    <Flex flexDirection="column" fullWidth className={className}>
      {withCopyButton ? (
        inputWithCopyButton
      ) : (
        <BaseInput
          testId={testId}
          ref={ref}
          label={label}
          type="text"
          onChange={handleOnChange}
          as="input"
          isInvalid={isInvalid}
          isDisabled={isDisabled}
          maxLength={maxLength}
          {...otherProps}
        />
      )}

      {countCharacters && maxLength && (
        <Flex justifyContent="flex-end">
          <Box marginTop="spacingXs" marginLeft="spacingM">
            <HelpText>
              {valueState ? valueState.length : 0}/{maxLength}
            </HelpText>
          </Box>
        </Flex>
      )}
    </Flex>
  );
};

export const TextInput = React.forwardRef(_TextInput);
