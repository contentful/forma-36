import React, { Component, SyntheticEvent } from 'react';
import cn from 'classnames';
import FormLabel from '../FormLabel';
import HelpText from '../HelpText';
import ValidationMessage from '../ValidationMessage';
import ControlledInput from '../ControlledInput/ControlledInput';
const styles = require('./ControlledInputField.css');

export interface ControlledInputFieldPropTypes {
  extraClassNames?: string;
  id: string;
  labelIsLight?: boolean;
  labelText: string;
  required?: boolean;
  testId?: string;
  helpText?: string;
  formLabelProps?: object;
  disabled?: boolean;
  helpTextProps?: object;
  validationMessage?: string;
  value?: string;
  name?: string;
  checked?: boolean;
  inputProps?: object;
  inputType?: 'radio' | 'checkbox';
  onChange?: (e: SyntheticEvent) => void;
  children?: React.ReactNode;
}

export class ControlledInputField extends Component<
  ControlledInputFieldPropTypes
> {
  static defaultProps = {
    testId: 'cf-ui-controlled-input-field',
    labelIsLight: false,
    checked: false,
    inputType: 'checkbox',
  };

  render() {
    const {
      id,
      labelIsLight,
      testId,
      required,
      helpText,
      disabled,
      labelText,
      helpTextProps,
      formLabelProps,
      extraClassNames,
      checked,
      value,
      validationMessage,
      onChange,
      children,
      inputType,
      inputProps,
      name,
      ...otherProps
    } = this.props;

    const classNames = cn(styles['ControlledInputField'], extraClassNames, {
      [styles['ControlledInputField--disabled']]: disabled,
    });

    return (
      <div data-test-id={testId} className={classNames} {...otherProps}>
        <ControlledInput
          id={id}
          labelText={labelText}
          type={inputType}
          name={name}
          required={required}
          checked={checked}
          disabled={disabled}
          value={value}
          onChange={onChange}
          extraClassNames={styles.ControlledInputField__input}
          {...inputProps}
        />
        <div className={styles['Checkbox__label-wrapper']}>
          <FormLabel
            extraClassNames={cn(styles.ControlledInputField__label, {
              [styles['ControlledInputField__label--light']]: labelIsLight,
            })}
            required={required}
            htmlFor={id}
            {...formLabelProps}
          >
            {labelText}
          </FormLabel>
          {helpText && (
            <HelpText
              extraClassNames={styles['ControlledInputField__help-text']}
              {...helpTextProps}
            >
              {helpText}
            </HelpText>
          )}
          {validationMessage && (
            <ValidationMessage
              extraClassNames={
                styles['ControlledInputField__validation-message']
              }
            >
              {validationMessage}
            </ValidationMessage>
          )}
        </div>
      </div>
    );
  }
}

export default ControlledInputField;
