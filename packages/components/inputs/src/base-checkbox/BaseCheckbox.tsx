import React, {
  KeyboardEventHandler,
  ChangeEventHandler,
  FocusEventHandler,
  useCallback,
  useState,
  useEffect,
  useRef,
} from 'react';
import { cx } from 'emotion';
import { Flex, CommonProps, useId } from '@contentful/f36-core';
import { Text } from '@contentful/f36-typography';
import type { checkboxTypes } from './types';
import { GhostCheckbox } from './GhostCheckbox';
import getStyles from './BaseCheckbox.styles';
import { AdditionalText, AdditionalTextProps } from '../additional-text/';

export interface BaseCheckboxProps extends CommonProps, AdditionalTextProps {
  /**
   * Defines the type of the input to be rendered
   * @default checkbox
   */
  type?: checkboxTypes;
  value?: string;
  isChecked?: boolean;
  onChange?: ChangeEventHandler<'input'>;
  onFocus?: FocusEventHandler<'input'>;
  onBlur?: FocusEventHandler<'input'>;
  onKeyDown?: KeyboardEventHandler<'input'>;
  label: string;
  isDisabled?: boolean;
  isIndeterminate?: boolean;
  isRequired?: boolean;
  id: string;
  blurOnEsc?: boolean;
  inputProps?: Partial<JSX.IntrinsicElements['input']>;
  name: string;
}

function _BaseCheckbox(
  props: BaseCheckboxProps,
  ref: React.Ref<HTMLLabelElement>,
) {
  const {
    isChecked = false,
    onChange,
    onFocus,
    onBlur,
    onKeyDown,
    type = 'checkbox',
    value,
    label = '',
    isDisabled,
    isIndeterminate,
    isRequired = false,
    id,
    blurOnEsc = false,
    validationMessage = '',
    helpText = '',
    testId = 'cf-ui-base-checkbox',
    className = '',
    inputProps,
    name,
    ...otherProps
  } = props;

  const [checked, setChecked] = useState<boolean>(isChecked);
  const inputRef = useRef(null);
  const inputId = useId(id, type);

  useEffect(() => {
    setChecked((checked) => (isChecked !== checked ? isChecked : checked));
  }, [isChecked]);

  useEffect(() => {
    inputRef.current.indeterminate = isIndeterminate;
  }, [isIndeterminate]);

  const styles = getStyles({ isDisabled, type });
  const handleChange = useCallback(
    (e) => {
      if (isDisabled) return;
      setChecked((checked) => !checked);
      if (onChange) {
        onChange(e);
      }
    },
    [onChange, isDisabled],
  );

  const handleFocus = useCallback(
    (e) => {
      if (onFocus) {
        onFocus(e);
      }
    },
    [onFocus],
  );

  const handleBlur = useCallback(
    (e) => {
      if (onBlur) {
        onBlur(e);
      }
    },
    [onBlur],
  );

  const handleKeyDown = useCallback(
    (e) => {
      e.persist();
      if (blurOnEsc && e.key === 'Escape') {
        inputRef?.current?.blur();
      }
      if (onKeyDown) {
        onKeyDown(e);
      }
    },
    [blurOnEsc, onKeyDown],
  );

  return (
    <Flex
      as="label"
      className={cx(styles.wrapper, className)}
      ref={ref}
      htmlFor={inputId}
      testId={testId}
      {...otherProps}
    >
      <input
        {...inputProps}
        className={cx(styles.input, inputProps?.className)}
        type={type === 'switch' ? 'checkbox' : type}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onKeyDown={handleKeyDown}
        value={value}
        disabled={isDisabled}
        checked={checked}
        role={type}
        aria-checked={checked}
        ref={inputRef}
        required={isRequired}
        id={inputId}
        name={name}
        aria-label={label}
      />
      <GhostCheckbox
        type={type}
        isChecked={checked}
        isDisabled={isDisabled}
        isIndeterminate={isIndeterminate}
      />
      <Flex flexDirection="column">
        <Text as="span" className={styles.label}>
          {label}
        </Text>
        <Flex flexDirection="column-reverse">
          <AdditionalText
            helpText={helpText}
            validationMessage={validationMessage}
          />
        </Flex>
      </Flex>
    </Flex>
  );
}

export const BaseCheckbox = React.forwardRef(_BaseCheckbox);
