import React, { Component } from 'react';
import cn from 'classnames';
import ValidationMessage from '../ValidationMessage';
import FormLabel, { FormLabelProps } from '../FormLabel/FormLabel';
import HelpText from '../HelpText';
import TextInput, { TextInputPropTypes } from '../TextInput/TextInput';
import TextLink, { TextLinkProps } from '../TextLink/TextLink';
import Textarea, { TextareaProps } from '../Textarea/Textarea';
import styles from './TextField.css';

export interface TextFieldProps {
  name: string;
  id: string;
  value?: string;
  validationMessage?: string;
  testId?: string;
  extraClassNames?: string;
  formLabelProps?: Partial<FormLabelProps>;
  textLinkProps?: Partial<TextLinkProps>;
  textInputProps?: Partial<TextInputPropTypes> | Partial<TextareaProps>;
  labelText?: string;
  helpText?: string;
  required?: boolean;
  textarea?: boolean;
  countCharacters?: boolean;
  onChange?: (...args: any[]) => any;
  onBlur?: (...args: any[]) => any;
}

export interface TextFieldState {
  value?: string;
}

export class TextField extends Component<TextFieldProps> {
  static defaultProps = {
    testId: 'cf-ui-text-field',
    textarea: false,
    required: false,
    countCharacters: false,
  };

  state = { value: this.props.value || '' };

  // Store a copy of the value in state.
  // This is used by this component when the `countCharacters`
  // option is on
  handleOnChange = evt => {
    this.setState({ value: evt.target.value });
    if (this.props.onChange) this.props.onChange(evt);
  };

  render() {
    const {
      validationMessage,
      extraClassNames,
      textInputProps,
      testId,
      formLabelProps,
      textLinkProps,
      labelText,
      helpText,
      textarea,
      countCharacters,
      required,
      onChange,
      onBlur,
      value,
      name,
      id,
      ...otherProps
    } = this.props;

    const classNames = cn(styles['TextField'], extraClassNames);

    const Element: any = textarea ? Textarea : TextInput;
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
                extraClassNames: styles['TextField__label-link'],
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
            onChange: this.handleOnChange,
            value,
            required,
            ...textInputProps,
          }}
        />
        {validationMessage && (
          <ValidationMessage
            extraClassNames={styles['TextField__validation-message']}
          >
            {validationMessage}
          </ValidationMessage>
        )}
        {(helpText || countCharacters) && (
          <div className={styles['TextField__hints']}>
            {helpText && (
              <HelpText extraClassNames={styles['TextField__help-text']}>
                {helpText}
              </HelpText>
            )}
            {countCharacters && textInputProps && textInputProps.maxLength && (
              <HelpText
                extraClassNames={cn(
                  styles['TextField__help-text'],
                  styles['TextField__count'],
                )}
              >
                {this.state.value ? this.state.value.length : 0}/
                {textInputProps.maxLength}
              </HelpText>
            )}
          </div>
        )}
      </div>
    );
  }
}

export default TextField;
