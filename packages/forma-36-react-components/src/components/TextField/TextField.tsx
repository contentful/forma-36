import React, {
  useCallback,
  useState,
  ChangeEvent,
  ChangeEventHandler,
  FocusEventHandler,
  ElementType,
} from 'react';
import cn from 'classnames';
import { ValidationMessage } from '@contentful/f36-validation-message';
import { Label } from '@contentful/f36-forms';
import type { LabelProps } from '@contentful/f36-forms';
import { Flex, Box } from '@contentful/f36-core';
import { HelpText } from '@contentful/f36-helptext';
import { TextInput, TextInputProps } from '../TextInput';
import { TextLink, TextLinkProps } from '@contentful/f36-text-link';
import { Textarea, TextareaProps } from '../Textarea';
import styles from './TextField.css';

export interface TextFieldProps {
  name: string;
  id: string;
  width?: string;
  labelText: string;
  value?: string;
  validationMessage?: string;
  testId?: string;
  className?: string;
  formLabelProps?: Partial<LabelProps>;
  textLinkProps?: Partial<TextLinkProps<'button'>>;
  textInputProps?: Partial<TextInputProps> | Partial<TextareaProps>;
  helpText?: string;
  required?: boolean;
  textarea?: boolean;
  countCharacters?: boolean;
  onChange?: ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>;
  onBlur?: FocusEventHandler<HTMLTextAreaElement | HTMLInputElement>;
  onFocus?: FocusEventHandler<HTMLTextAreaElement | HTMLInputElement>;
}

export const TextField = ({
  className,
  countCharacters = false,
  formLabelProps,
  helpText,
  id,
  labelText,
  name,
  onBlur,
  onChange,
  onFocus,
  required = false,
  testId = 'cf-ui-text-field',
  textarea = false,
  textInputProps,
  textLinkProps,
  validationMessage,
  value,
  width = 'full',
  ...otherProps
}: TextFieldProps) => {
  const [valueState, setValueState] = useState<string | undefined>(value);

  // Store a copy of the value in state.
  // This is used by this component when the `countCharacters`
  // option is on
  const handleOnChange = useCallback(
    (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
      setValueState(e.target.value);
      if (onChange) onChange(e);
    },
    [onChange],
  );

  const widthClass = `TextField--${width}`;
  const classNames = cn(styles['TextField'], styles[widthClass], className);

  const Element: ElementType = textarea ? Textarea : TextInput;

  return (
    <div className={classNames} {...otherProps} data-test-id={testId}>
      <div className={styles['TextField__label-wrapper']}>
        <Label {...formLabelProps} htmlFor={id} required={required}>
          {labelText}
        </Label>
        {textLinkProps && (
          <TextLink
            {...textLinkProps}
            className={styles['TextField__label-link']}
            as={textLinkProps.as || 'button'}
          >
            {textLinkProps.children}
          </TextLink>
        )}
      </div>
      <Element
        error={!!validationMessage}
        name={name}
        id={id}
        onBlur={onBlur}
        onFocus={onFocus}
        onChange={handleOnChange}
        value={value}
        required={required}
        width={'full'}
        {...textInputProps}
      />
      {(helpText || countCharacters) && (
        <Flex justifyContent="space-between">
          {helpText && (
            <Box marginTop="spacingXs">
              <HelpText>{helpText}</HelpText>
            </Box>
          )}
          {countCharacters && textInputProps && textInputProps.maxLength && (
            <Box
              marginTop="spacingXs"
              marginLeft="spacingM"
              className={cn(styles['TextField__count'])}
            >
              <HelpText>
                {valueState ? valueState.length : 0}/{textInputProps.maxLength}
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
    </div>
  );
};
