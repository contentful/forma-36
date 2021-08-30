import React from 'react';
import { Box, Flex } from '@contentful/f36-core';
import { BaseCheckbox } from '../base-checkbox';
import { ValidationMessage } from '@contentful/f36-validation-message';
import { HelpText } from '@contentful/f36-helptext';
import { getStyles } from './BaseCheckboxField.styles';
import { Label } from '../Label';
import { cx } from 'emotion';
import { BaseCheckboxFieldProps } from './types';

const _BaseCheckboxField = (
  {
    testId = 'cf-ui-base-field',
    formLabelProps,
    helpTextProps,
    helpText,
    validationMessage,
    label,
    id,
    isChecked,
    isRequired,
    isDisabled,
    className,
    value,
    onChange,
    type = 'checkbox',
    name,
    inputProps,
    ...otherProps
  }: BaseCheckboxFieldProps,
  ref: React.Ref<HTMLDivElement>,
) => {
  const styles = getStyles({ isDisabled });

  return (
    <Box
      as="div"
      display="inline-flex"
      ref={ref}
      testId={testId}
      className={cx(styles.wrapper, className)}
      {...otherProps}
    >
      <BaseCheckbox
        id={id}
        label={label}
        name={name}
        isChecked={isChecked}
        isRequired={isRequired}
        isDisabled={isDisabled}
        value={value}
        onChange={onChange}
        type={type}
        {...inputProps}
        className={cx(styles.input, inputProps?.className)}
      />
      <Flex flexDirection="column">
        <Label
          required={isRequired}
          htmlFor={id}
          {...formLabelProps}
          className={cx(styles.label, formLabelProps?.className)}
        >
          {label}
        </Label>
        {validationMessage && (
          <ValidationMessage>{validationMessage}</ValidationMessage>
        )}
        {helpText && <HelpText {...helpTextProps}>{helpText}</HelpText>}
      </Flex>
    </Box>
  );
};

export const BaseCheckboxField = React.forwardRef(_BaseCheckboxField);
