import React, { ChangeEventHandler, ReactNode } from 'react';
import cn from 'classnames';
import { ValidationMessage } from '@contentful/f36-validation-message';

import { FormLabel } from '../FormLabel';
import { HelpText } from '../HelpText';
import { ControlledInput } from '../ControlledInput/ControlledInput';
import styles from './ControlledInputField.css';

export interface ControlledInputFieldProps {
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

export const ControlledInputField = ({
  id,
  labelIsLight = false,
  testId = 'cf-ui-controlled-input-field',
  required,
  helpText,
  disabled,
  labelText,
  helpTextProps,
  formLabelProps,
  className,
  checked = false,
  value,
  validationMessage,
  onChange,
  children,
  inputType = 'checkbox',
  inputProps,
  name,
  ...otherProps
}: ControlledInputFieldProps) => {
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
      <div>
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
        {validationMessage && (
          <ValidationMessage
            className={styles['ControlledInputField__validation-message']}
          >
            {validationMessage}
          </ValidationMessage>
        )}
        {helpText && (
          <HelpText
            className={styles['ControlledInputField__help-text']}
            {...helpTextProps}
          >
            {helpText}
          </HelpText>
        )}
      </div>
    </div>
  );
};
