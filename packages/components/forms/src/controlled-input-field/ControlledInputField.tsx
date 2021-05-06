import React, { ChangeEventHandler, ReactNode } from 'react';
import cn from 'classnames';
import { ValidationMessage } from '@contentful/f36-validation-message';
import { Label } from '../Label';
import { ControlledInput } from '@contentful/f36-inputs';
import { HelpText } from '@contentful/f36-helptext';

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
        label={labelText}
        type={inputType}
        name={name}
        isRequired={required}
        isChecked={checked}
        isDisabled={disabled}
        value={value}
        onChange={onChange}
        className={styles.ControlledInputField__input}
        {...inputProps}
      />
      <div>
        <Label
          className={cn(styles.ControlledInputField__label, {
            [styles['ControlledInputField__label--light']]: labelIsLight,
          })}
          required={required}
          htmlFor={id}
          {...formLabelProps}
        >
          {labelText}
        </Label>
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
