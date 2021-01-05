import React, {
  useEffect,
  useState,
  ChangeEvent,
  FocusEventHandler,
  ChangeEventHandler,
} from 'react';
import cn from 'classnames';
import ValidationMessage from '../ValidationMessage';
import FormLabel, { FormLabelProps } from '../FormLabel';
import HelpText from '../HelpText';
import Select, { SelectProps } from '../Select';
import TextLink, { TextLinkProps } from '../TextLink';
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

export interface SelectFieldState {
  value?: string;
}

const defaultProps: Partial<SelectFieldProps> = {
  testId: 'cf-ui-select-field',
  required: false,
};

export const SelectField = (props: SelectFieldProps) => {
  const {
    validationMessage,
    className,
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
  } = props;
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

SelectField.defaultProps = defaultProps;

export default SelectField;
