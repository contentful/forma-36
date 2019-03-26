import React, { Component, ChangeEventHandler } from 'react';
import cn from 'classnames';
import FormLabel from '../FormLabel';
import HelpText from '../HelpText';
import ValidationMessage from '../ValidationMessage';
import ControlledInput from '../ControlledInput/ControlledInput';
const styles = require('./ControlledInputField.css');

export type ControlledInputFieldPropTypes = {
  id: string;
  labelText: string;
  labelIsLight?: boolean;
  isRequired?: boolean;
  helpText?: string;
  formLabelProps?: object;
  isDisabled?: boolean;
  helpTextProps?: object;
  validationMessage?: string;
  value?: string;
  name?: string;
  isChecked?: boolean;
  inputProps?: object;
  inputType?: 'radio' | 'checkbox';
  onChange?: ChangeEventHandler;
  className?: string;
  testId?: string;
  children?: React.ReactNode;
} & typeof defaultProps;

const defaultProps = {
  testId: 'cf-ui-controlled-input-field',
  labelIsLight: false,
  isChecked: false,
  inputType: 'checkbox',
};

export class ControlledInputField extends Component<
  ControlledInputFieldPropTypes
> {
  static defaultProps = defaultProps;

  render() {
    const {
      id,
      labelIsLight,
      testId,
      isRequired,
      helpText,
      isDisabled,
      labelText,
      helpTextProps,
      formLabelProps,
      className,
      isChecked,
      value,
      validationMessage,
      onChange,
      children,
      inputType,
      inputProps,
      name,
      ...otherProps
    } = this.props;

    const classNames = cn(styles['ControlledInputField'], className, {
      [styles['ControlledInputField--is-disabled']]: isDisabled,
    });

    return (
      <div data-test-id={testId} className={classNames} {...otherProps}>
        <ControlledInput
          id={id}
          labelText={labelText}
          type={inputType}
          name={name}
          isRequired={isRequired}
          isChecked={isChecked}
          isDisabled={isDisabled}
          value={value}
          onChange={onChange}
          className={styles.ControlledInputField__input}
          {...inputProps}
        />
        <div className={styles['Checkbox__label-wrapper']}>
          <FormLabel
            className={cn(styles.ControlledInputField__label, {
              [styles['ControlledInputField__label--light']]: labelIsLight,
            })}
            isRequired={isRequired}
            htmlFor={id}
            {...formLabelProps}
          >
            {labelText}
          </FormLabel>
          {helpText && (
            <HelpText
              className={styles['ControlledInputField__help-text']}
              {...helpTextProps}
            >
              {helpText}
            </HelpText>
          )}
          {validationMessage && (
            <ValidationMessage
              className={styles['ControlledInputField__validation-message']}
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
