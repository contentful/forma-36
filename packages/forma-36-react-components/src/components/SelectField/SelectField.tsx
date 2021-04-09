import React, { useEffect, useState } from 'react';
import type { ChangeEvent, FocusEventHandler, ChangeEventHandler } from 'react';
import cn from 'classnames';
import { ValidationMessage } from '@contentful/f36-validation-message';

import { FormLabel } from '../FormLabel';
import type { FormLabelProps } from '../FormLabel';
import { HelpText } from '../HelpText';
import { Select } from '../Select';
import type { SelectProps } from '../Select';
import { TextLink } from '../TextLink';
import type { TextLinkProps } from '../TextLink';
import styles from './SelectField.css';

export interface SelectFieldProps {
  name: string;
  id: string;
  labelText: string;
  children: React.ReactNode;
  value?: string;
  validationMessage?: string;
  formLabelProps?: Partial<FormLabelProps>;
  textLinkProps?: Partial<TextLinkProps>;
  selectProps?: Partial<SelectProps>;
  helpText?: string;
  required?: boolean;
  onChange?: ChangeEventHandler;
  onBlur?: FocusEventHandler;
  testId?: string;
  className?: string;
}

export const SelectField = ({
  children,
  className,
  formLabelProps,
  helpText,
  id,
  labelText,
  name,
  onBlur,
  onChange,
  required = false,
  selectProps,
  testId = 'cf-ui-select-field',
  textLinkProps,
  validationMessage,
  value,
  ...otherProps
}: SelectFieldProps) => {
  const [valueState, setValueState] = useState<string | undefined>(value);

  // Store a copy of the value in state.
  // This is used by this component when the `countCharacters`
  // option is on
  const handleOnChange = (e: ChangeEvent<HTMLSelectElement>) => {
    e.persist();
    setValueState(e.currentTarget.value);
    if (onChange) {
      onChange(e);
    }
  };

  useEffect(() => {
    setValueState(value);
  }, [value]);

  const classNames = cn(styles['SelectField'], className);

  return (
    <div className={classNames} {...otherProps} data-test-id={testId}>
      <div className={styles['SelectField__label-wrapper']}>
        <FormLabel {...{ ...formLabelProps, htmlFor: id, required }}>
          {labelText}
        </FormLabel>
        {textLinkProps && (
          <TextLink
            className={styles['SelectField__label-link']}
            {...textLinkProps}
          >
            {textLinkProps.text}
          </TextLink>
        )}
      </div>
      <Select
        hasError={!!validationMessage}
        name={name}
        id={id}
        onBlur={onBlur}
        onChange={handleOnChange}
        value={valueState}
        required={required}
        {...selectProps}
      >
        {children}
      </Select>
      {helpText && (
        <div className={styles['SelectField__hints']}>
          {helpText && (
            <HelpText className={styles['SelectField__help-text']}>
              {helpText}
            </HelpText>
          )}
        </div>
      )}
      {validationMessage && (
        <ValidationMessage
          className={styles['SelectField__validation-message']}
        >
          {validationMessage}
        </ValidationMessage>
      )}
    </div>
  );
};
