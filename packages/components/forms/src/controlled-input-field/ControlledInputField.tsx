import React, { ChangeEventHandler, ReactNode } from 'react';
import { cx } from 'emotion';
import { ValidationMessage } from '@contentful/f36-validation-message';
import { Label } from '../Label';
import { ControlledInput } from '@contentful/f36-inputs';
import { HelpText } from '@contentful/f36-helptext';
import type { ControlledInputProps } from '@contentful/f36-inputs';
import { styles } from './ControlledInputField.styles';

export interface ControlledInputFieldProps {
  id: string;
  label: string;
  isLabelLight?: boolean;
  isRequired?: boolean;
  helpText?: string;
  formLabelProps?: object;
  isDisabled?: boolean;
  helpTextProps?: object;
  validationMessage?: string;
  value?: string;
  name?: string;
  isChecked?: boolean;
  inputProps?: ControlledInputProps;
  inputType?: 'radio' | 'checkbox';
  onChange?: ChangeEventHandler;
  className?: string;
  testId?: string;
  children?: ReactNode;
}

export const ControlledInputField = ({
  id,
  isLabelLight = false,
  testId = 'cf-ui-controlled-input-field',
  isRequired,
  helpText,
  isDisabled,
  label,
  helpTextProps,
  formLabelProps,
  className,
  isChecked = false,
  value,
  validationMessage,
  onChange,
  children,
  inputType = 'checkbox',
  inputProps,
  name,
  ...otherProps
}: ControlledInputFieldProps) => {
  const rootClassNames = cx(styles.root, className, {
    [styles.rootOrLabelDisabled]: isDisabled,
  });
  const inputClassNames = cx(styles.input, inputProps?.className);
  const labelClassNames = cx(styles.label, {
    [styles.labelLight]: isLabelLight,
    [styles.rootOrLabelDisabled]: isDisabled,
  });

  return (
    <div data-test-id={testId} className={rootClassNames} {...otherProps}>
      <ControlledInput
        id={id}
        label={label}
        type={inputType}
        name={name}
        isRequired={isRequired}
        isChecked={isChecked}
        isDisabled={isDisabled}
        value={value}
        onChange={onChange}
        className={inputClassNames}
        {...inputProps}
      />
      <div>
        <Label
          className={labelClassNames}
          required={isRequired}
          htmlFor={id}
          {...formLabelProps}
        >
          {label}
        </Label>
        {validationMessage && (
          <ValidationMessage>{validationMessage}</ValidationMessage>
        )}
        {helpText && <HelpText {...helpTextProps}>{helpText}</HelpText>}
      </div>
    </div>
  );
};
