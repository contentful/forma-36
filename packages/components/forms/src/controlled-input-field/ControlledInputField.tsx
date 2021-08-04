import React, { EventHandler, ChangeEvent, ReactNode } from 'react';
import { cx } from 'emotion';
import { ValidationMessage } from '@contentful/f36-validation-message';
import { Label, LabelProps } from '../Label';
import { ControlledInput } from '@contentful/f36-inputs';
import { HelpText } from '@contentful/f36-helptext';
import type { ControlledInputProps } from '@contentful/f36-inputs';
import { getStyles } from './ControlledInputField.styles';
import { Box, BoxProps } from '@contentful/f36-core';

export interface ControlledInputFieldProps extends BoxProps<'div'> {
  id: string;
  label: string;
  isLabelLight?: boolean;
  isRequired?: boolean;
  helpText?: string;
  formLabelProps?: LabelProps;
  isDisabled?: boolean;
  helpTextProps?: object;
  validationMessage?: string;
  value?: string;
  name?: string;
  isChecked?: boolean;
  inputProps?: Omit<
    ControlledInputProps,
    | 'id'
    | 'label'
    | 'name'
    | 'isRequired'
    | 'isChecked'
    | 'isDisabled'
    | 'value'
    | 'onChange'
    | 'type'
  >;
  inputType?: 'radio' | 'checkbox';
  onChange?: EventHandler<ChangeEvent<HTMLInputElement>>;
  className?: string;
  testId?: string;
  children?: ReactNode;
  ref: React.Ref<HTMLDivElement>;
}

export const _ControlledInputField = (
  {
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
  }: ControlledInputFieldProps,
  ref: React.Ref<HTMLDivElement>,
) => {
  const styles = getStyles();

  const rootClassNames = cx(
    {
      [styles.rootOrLabelDisabled]: isDisabled,
    },
    className,
  );
  const inputClassNames = cx(styles.input, inputProps?.className);
  const labelClassNames = cx(styles.label, {
    [styles.labelLight]: isLabelLight,
    [styles.rootOrLabelDisabled]: isDisabled,
  });
  const inputLabelClassNames = cx({
    [styles.rootOrLabelDisabled]: isDisabled,
  });

  return (
    <Box
      as="div"
      display="inline-flex"
      ref={ref}
      testId={testId}
      {...otherProps}
      className={rootClassNames}
    >
      <ControlledInput
        id={id}
        label={label}
        name={name}
        isRequired={isRequired}
        isChecked={isChecked}
        isDisabled={isDisabled}
        value={value}
        onChange={onChange}
        type={inputType}
        labelProps={{ className: inputLabelClassNames }}
        {...inputProps}
        className={inputClassNames}
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
        {helpText && (
          <HelpText marginTop="spacingXs" {...helpTextProps}>
            {helpText}
          </HelpText>
        )}
        {validationMessage && (
          <ValidationMessage marginTop="spacingXs">
            {validationMessage}
          </ValidationMessage>
        )}
      </div>
    </Box>
  );
};

export const ControlledInputField = React.forwardRef(_ControlledInputField);
