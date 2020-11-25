import React, {
  useState,
  ChangeEvent,
  ChangeEventHandler,
  FocusEventHandler,
  ElementType,
} from 'react';
import cn from 'classnames';
import ValidationMessage from '../ValidationMessage';
import FormLabel, { FormLabelProps } from '../FormLabel';
import HelpText from '../HelpText';
import TextInput, { TextInputProps } from '../TextInput';
import TextLink, { TextLinkProps } from '../TextLink';
import Textarea, { TextareaProps } from '../Textarea';
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
  formLabelProps?: Partial<FormLabelProps>;
  textLinkProps?: Partial<TextLinkProps>;
  textInputProps?: Partial<TextInputProps> | Partial<TextareaProps>;
  helpText?: string;
  required?: boolean;
  textarea?: boolean;
  countCharacters?: boolean;
  onChange?: ChangeEventHandler;
  onBlur?: FocusEventHandler;
  onFocus?: FocusEventHandler;
}

export interface TextFieldState {
  value?: string;
  initialValue?: string;
}

const defaultProps: Partial<TextFieldProps> = {
  testId: 'cf-ui-text-field',
  textarea: false,
  required: false,
  countCharacters: false,
  width: 'full',
};

export const TextField = (props: TextFieldProps) => {
  const {
    validationMessage,
    className,
    textInputProps,
    testId,
    width,
    formLabelProps,
    textLinkProps,
    labelText,
    helpText,
    textarea,
    countCharacters,
    required,
    onChange,
    onBlur,
    onFocus,
    value,
    name,
    id,
    ...otherProps
  } = props;
  const [valueState, setValueState] = useState<string | undefined>(value);

  // Store a copy of the value in state.
  // This is used by this component when the `countCharacters`
  // option is on
  const handleOnChange = (
    e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
  ) => {
    setValueState(e.target.value);
    if (onChange) onChange(e);
  };

  const widthClass = `TextField--${width}`;
  const classNames = cn(styles['TextField'], styles[widthClass], className);

  const Element: ElementType = textarea ? Textarea : TextInput;

  return (
    <div className={classNames} {...otherProps} data-test-id={testId}>
      <div className={styles['TextField__label-wrapper']}>
        <FormLabel {...formLabelProps} htmlFor={id} required={required}>
          {labelText}
        </FormLabel>
        {textLinkProps && (
          <TextLink
            {...{
              ...textLinkProps,
              className: styles['TextField__label-link'],
            }}
          >
            {textLinkProps.text}
          </TextLink>
        )}
      </div>
      <Element
        {...{
          error: !!validationMessage,
          name,
          id,
          onBlur,
          onFocus,
          onChange: handleOnChange,
          value,
          required,
          ...textInputProps,
          width: 'full',
        }}
      />
      {validationMessage && (
        <ValidationMessage className={styles['TextField__validation-message']}>
          {validationMessage}
        </ValidationMessage>
      )}
      {(helpText || countCharacters) && (
        <div className={styles['TextField__hints']}>
          {helpText && (
            <HelpText className={styles['TextField__help-text']}>
              {helpText}
            </HelpText>
          )}
          {countCharacters && textInputProps && textInputProps.maxLength && (
            <HelpText
              className={cn(
                styles['TextField__help-text'],
                styles['TextField__count'],
              )}
            >
              {valueState ? valueState.length : 0}/{textInputProps.maxLength}
            </HelpText>
          )}
        </div>
      )}
    </div>
  );
};

TextField.defaultProps = defaultProps;

export default TextField;
