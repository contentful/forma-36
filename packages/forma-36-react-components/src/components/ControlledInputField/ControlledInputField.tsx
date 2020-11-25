import React, { ChangeEventHandler, ReactNode } from 'react';
import cn from 'classnames';
import FormLabel from '../FormLabel';
import HelpText from '../HelpText';
import ValidationMessage from '../ValidationMessage';
import ControlledInput from '../ControlledInput/ControlledInput';
import styles from './ControlledInputField.css';

export interface ControlledInputFieldPropTypes {
  id: string;
  labelText: string;
  labelIsLight?: boolean;
  required?: boolean;
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
  onChange?: ChangeEventHandler;
  className?: string;
  testId?: string;
  children?: ReactNode;
}

const defaultProps: Partial<ControlledInputFieldPropTypes> = {
  testId: 'cf-ui-controlled-input-field',
  labelIsLight: false,
  checked: false,
  inputType: 'checkbox',
};

export const ControlledInputField = (props: ControlledInputFieldPropTypes) => {
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
    className,
    checked,
    value,
    validationMessage,
    onChange,
    children,
    inputType,
    inputProps,
    name,
    ...otherProps
  } = props;

  const classNames = cn(styles['ControlledInputField'], className, {
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
        className={styles.ControlledInputField__input}
        {...inputProps}
      />
      <div className={styles['Checkbox__label-wrapper']}>
        <FormLabel
          className={cn(styles.ControlledInputField__label, {
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
};

ControlledInputField.defaultProps = defaultProps;

export default ControlledInputField;
