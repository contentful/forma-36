import React, { useState, ChangeEvent, useCallback } from 'react';
import { BaseInput } from '../base-input';
import { Flex } from '@contentful/f36-core';
import { CopyButton } from '@contentful/f36-copybutton';
import getStyles from './TextInput.styles';
import { cx } from 'emotion';
import { TextInputProps } from './types';
import { useFormControl } from '../form-control/FormControlContext';

export const _TextInput = (
  {
    className,
    testId = 'cf-ui-text-input',
    label,
    id,
    value,
    onChange,
    isInvalid,
    isDisabled,
    isRequired,
    isReadOnly,
    withCopyButton,
    onCopy,
    ...otherProps
  }: TextInputProps,
  ref: React.Ref<HTMLInputElement>,
) => {
  const formProps = useFormControl({
    id,
    isInvalid,
    isDisabled,
    isRequired,
    isReadOnly,
  });

  const [valueState, setValueState] = useState(value);
  const styles = getStyles();

  // Store a copy of the value in state.
  // This is used by this component when the `countCharacters`
  // option is on
  const handleOnChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setValueState(e.target.value);
      if (onChange) onChange(e);
    },
    [onChange],
  );

  const copyButtonStyles = cx(styles.copyButton, {
    [styles.disabled]: Boolean(isDisabled),
    [styles.invalid]: Boolean(isInvalid),
  });

  const inputWithCopyButton = (
    <Flex className={className}>
      <BaseInput
        {...otherProps}
        {...formProps}
        testId={testId}
        ref={ref}
        label={label}
        type="text"
        onChange={handleOnChange}
        as="input"
        className={styles.inputWithCopyButton}
        value={valueState}
      />
      <CopyButton
        value={valueState}
        onCopy={onCopy}
        className={copyButtonStyles}
      />
    </Flex>
  );

  return (
    <Flex flexDirection="column" fullWidth className={className}>
      {withCopyButton ? (
        inputWithCopyButton
      ) : (
        <BaseInput
          testId={testId}
          ref={ref}
          label={label}
          type="text"
          onChange={handleOnChange}
          as="input"
          {...otherProps}
          {...formProps}
        />
      )}
    </Flex>
  );
};

export const TextInput = React.forwardRef(_TextInput);
