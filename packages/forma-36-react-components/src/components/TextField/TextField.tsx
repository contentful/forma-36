import React, {
  Component,
  ChangeEvent,
  ChangeEventHandler,
  FocusEventHandler,
} from 'react';
import cn from 'classnames';
import ValidationMessage from '../ValidationMessage';
import FormLabel, { FormLabelProps } from '../FormLabel/FormLabel';
import HelpText from '../HelpText';
import TextInput, { TextInputProps } from '../TextInput/TextInput';
import TextLink, { TextLinkProps } from '../TextLink/TextLink';
import Textarea, { TextareaProps } from '../Textarea/Textarea';
import styles from './TextField.css';

export type TextFieldProps = {
  name: string;
  id: string;
  labelText: string;
  value?: string;
  validationMessage?: string;
  testId?: string;
  className?: string;
  formLabelProps?: Partial<FormLabelProps>;
  textLinkProps?: Partial<TextLinkProps>;
  textInputProps?: Partial<TextInputProps> | Partial<TextareaProps>;
  helpText?: string;
  isRequired?: boolean;
  textarea?: boolean;
  countCharacters?: boolean;
  onChange?: ChangeEventHandler;
  onBlur?: FocusEventHandler;
} & typeof defaultProps;

export interface TextFieldState {
  value?: string;
}

const defaultProps = {
  testId: 'cf-ui-text-field',
  textarea: false,
  isRequired: false,
  countCharacters: false,
};

export class TextField extends Component<TextFieldProps, TextFieldState> {
  static defaultProps = defaultProps;

  state = { value: this.props.value || '' };

  // Store a copy of the value in state.
  // This is used by this component when the `countCharacters`
  // option is on
  handleOnChange = (evt: ChangeEvent) => {
    this.setState({ value: (evt.target as HTMLInputElement).value });
    if (this.props.onChange) this.props.onChange(evt);
  };

  render() {
    const {
      validationMessage,
      className,
      textInputProps,
      testId,
      formLabelProps,
      textLinkProps,
      labelText,
      helpText,
      textarea,
      countCharacters,
      isRequired,
      onChange,
      onBlur,
      value,
      name,
      id,
      ...otherProps
    } = this.props;

    const classNames = cn(styles['TextField'], className);

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const Element: any = textarea ? Textarea : TextInput;
    return (
      <div className={classNames} {...otherProps} data-test-id={testId}>
        <div className={styles['TextField__label-wrapper']}>
          <FormLabel {...formLabelProps} htmlFor={id} isRequired={isRequired}>
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
            onChange: this.handleOnChange,
            value,
            isRequired,
            ...textInputProps,
          }}
        />
        {validationMessage && (
          <ValidationMessage
            className={styles['TextField__validation-message']}
          >
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
