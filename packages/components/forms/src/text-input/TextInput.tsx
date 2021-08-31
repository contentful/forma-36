import React, { useCallback, useState, ChangeEvent } from 'react';
import { BaseInput } from '../base-input';
import { Box, Flex } from '@contentful/f36-core';
import { Label } from '@contentful/f36-forms';
import { ValidationMessage } from '@contentful/f36-validation-message';
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
    isStandalone = false,
    isRequired = false,
    helpText,
    label,
    id,
    link,
    validationMessage,
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
  const handleOnChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setValueState(e.target.value);
      if (onChange) onChange(e);
    },
    [onChange],
  );

  const copyButtonStyles = cx(styles.copyButton, {
    [styles.disabled]: Boolean(isDisabled),
    [styles.invalid]: Boolean(isInvalid),
  });

  const inputWithCopyButton = (
    <Flex>
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
      {!isStandalone &&
        (link ? (
          <Flex justifyContent="space-between" alignItems="center" fullWidth>
            <Label htmlFor={id} required={isRequired}>
              {label}
            </Label>
            {link && link}
          </Flex>
        ) : (
          <Label htmlFor={id} required={isRequired}>
            {label}
          </Label>
        ))}
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

      {!isStandalone && (helpText || countCharacters || validationMessage) && (
        <Flex justifyContent="space-between">
          <Flex flexDirection="column">
            {helpText && (
              <Box marginTop="spacingXs">
                <HelpText>{helpText}</HelpText>
              </Box>
            )}
            {validationMessage && (
              <Box marginTop="spacingXs">
                <ValidationMessage>{validationMessage}</ValidationMessage>
              </Box>
            )}
          </Flex>

          {countCharacters && maxLength && (
            <Box marginTop="spacingXs" marginLeft="spacingM">
              <HelpText>
                {valueState ? valueState.length : 0}/{maxLength}
              </HelpText>
            </Box>
          )}
        </Flex>
      )}
    </Flex>
  );
};

export const TextInput = React.forwardRef(_TextInput);
