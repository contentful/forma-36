import React, { Component } from 'react';
import cn from 'classnames';
import ValidationMessage from '../ValidationMessage';
import FormLabel, { FormLabelProps } from '../FormLabel/FormLabel';
import HelpText from '../HelpText';
import Select, { SelectProps } from '../Select/Select/Select';
import TextLink, { TextLinkProps } from '../TextLink/TextLink';
import styles from './SelectField.css';

export interface SelectFieldProps {
  name: string;
  id: string;
  children: React.ReactNode;
  value?: string;
  validationMessage?: string;
  testId?: string;
  extraClassNames?: string;
  formLabelProps?: Partial<FormLabelProps>;
  textLinkProps?: Partial<TextLinkProps>;
  selectProps?: Partial<SelectProps>;
  labelText?: string;
  helpText?: string;
  required?: boolean;
  onChange?: (...args: any[]) => any;
  onBlur?: (...args: any[]) => any;
}

export interface SelectFieldState {
  value?: string;
}

export class SelectField extends Component<SelectFieldProps, SelectFieldState> {
  static defaultProps = {
    testId: 'cf-ui-select-field',
    required: false,
  };

  state = { value: this.props.value };

  componentWillReceiveProps(nextProps) {
    if (this.props.value !== nextProps.value) {
      this.setState({
        value: nextProps.value,
      });
    }
  }

  // Store a copy of the value in state.
  // This is used by this component when the `countCharacters`
  // option is on
  handleOnChange = evt => {
    this.setState({ value: evt.target.value });
    if (this.props.onChange) {
      this.props.onChange(evt);
    }
  };

  render() {
    const {
      validationMessage,
      extraClassNames,
      children,
      selectProps,
      testId,
      formLabelProps,
      textLinkProps,
      labelText,
      helpText,
      required,
      onChange,
      onBlur,
      value,
      name,
      id,
      ...otherProps
    } = this.props;

    const classNames = cn(styles['SelectField'], extraClassNames);

    return (
      <div className={classNames} {...otherProps} data-test-id={testId}>
        <div className={styles['SelectField__label-wrapper']}>
          <FormLabel {...{ ...formLabelProps, htmlFor: id, required }}>
            {labelText}
          </FormLabel>
          {textLinkProps && (
            <TextLink
              {...{
                ...textLinkProps,
                extraClassNames: styles['SelectField__label-link'],
              }}
            >
              {textLinkProps.text}
            </TextLink>
          )}
        </div>
        <Select
          {...{
            hasError: !!validationMessage,
            name,
            id,
            onBlur,
            onChange: this.handleOnChange,
            value: this.state.value,
            required,
            ...selectProps,
          }}
        >
          {children}
        </Select>
        {validationMessage && (
          <ValidationMessage
            extraClassNames={styles['SelectField__validation-message']}
          >
            {validationMessage}
          </ValidationMessage>
        )}
        {helpText && (
          <div className={styles['SelectField__hints']}>
            {helpText && (
              <HelpText extraClassNames={styles['SelectField__help-text']}>
                {helpText}
              </HelpText>
            )}
          </div>
        )}
      </div>
    );
  }
}

export default SelectField;
