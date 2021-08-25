import React, {
  useCallback,
  useState,
  ChangeEvent,
  ChangeEventHandler,
} from 'react';
import { BaseInput } from '@contentful/f36-inputs';
import { Box, Flex, CommonProps } from '@contentful/f36-core';
import { Label } from '@contentful/f36-forms';
import { ValidationMessage } from '@contentful/f36-validation-message';
import { HelpText } from '@contentful/f36-helptext';
import { TextLink } from '@contentful/f36-text-link';

export interface TextInputProps extends CommonProps {
  isStandalone?: boolean;
  isRequired?: boolean;
  validationMessage?: string;
  helpText?: string;
  countCharacters?: boolean;
  className?: string;
  testId?: string;
  link?: React.ReactElement;
  label: string;
  maxLength?: number;
  value?: string;
  placeholder?: string;
  name?: string;
  id?: string;
  isInvalid?: boolean;
  isDisabled?: boolean;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  icon?: React.ReactElement;
}

export const _TextInput = (
  {
    className,
    testId = 'cf-ui-text-field',
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
    placeholder,
    maxLength,
    isInvalid,
    isDisabled,
    name,
    icon,
    ...otherProps
  }: TextInputProps,
  ref: React.Ref<HTMLInputElement>,
) => {
  const [valueState, setValueState] = useState<string | undefined>(value);

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

  return (
    <Flex flexDirection="column" fullWidth>
      {!isStandalone && (
        <Flex justifyContent="space-between" alignItems="center" fullWidth>
          <Label htmlFor={id} required={isRequired}>
            {label}
          </Label>
          {link && <TextLink as="button">{link}</TextLink>}
        </Flex>
      )}

      <BaseInput
        testId={testId}
        {...otherProps}
        ref={ref}
        label={label}
        type="text"
        onChange={handleOnChange}
        placeholder={placeholder}
        as="input"
        name={name}
        isInvalid={isInvalid}
        isDisabled={isDisabled}
        icon={icon}
      />
      {!isStandalone && (
        <>
          {(helpText || countCharacters) && (
            <Flex justifyContent="space-between">
              {helpText && (
                <Box marginTop="spacingXs">
                  <HelpText>{helpText}</HelpText>
                </Box>
              )}
              {countCharacters && maxLength && (
                <Box marginTop="spacingXs" marginLeft="spacingM">
                  <HelpText>
                    {valueState ? valueState.length : 0}/{maxLength}
                  </HelpText>
                </Box>
              )}
            </Flex>
          )}
          {validationMessage && (
            <Box marginTop="spacingXs">
              <ValidationMessage>{validationMessage}</ValidationMessage>
            </Box>
          )}
        </>
      )}
    </Flex>
  );
};

export const TextInput = React.forwardRef(_TextInput);
