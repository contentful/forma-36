import React, { useCallback, useState, useEffect } from 'react';
import { cx } from 'emotion';
import {
  Flex,
  useId,
  useForwardedRef,
  PropsWithHTMLElement,
} from '@contentful/f36-core';
import type { BaseCheckboxInternalProps } from './types';
import { GhostCheckbox } from './GhostCheckbox';
import getStyles from './BaseCheckbox.styles';

export type BaseCheckboxProps = PropsWithHTMLElement<
  BaseCheckboxInternalProps,
  'label',
  'htmlFor'
>;

function _BaseCheckbox(
  props: BaseCheckboxProps,
  ref: React.Ref<HTMLInputElement>,
) {
  const {
    isChecked = false,
    onChange,
    onFocus,
    onBlur,
    onKeyDown,
    type = 'checkbox',
    value,
    label,
    isDisabled,
    isIndeterminate,
    isRequired = false,
    id,
    willBlurOnEsc = true,
    testId = 'cf-ui-base-checkbox',
    className = '',
    inputProps,
    name,
    ...otherProps
  } = props;

  const [checked, setChecked] = useState<boolean>(isChecked);
  const inputRef = useForwardedRef<HTMLInputElement>(ref);
  const inputId = useId(id, type);

  useEffect(() => {
    setChecked((checked) => (isChecked !== checked ? isChecked : checked));
  }, [isChecked]);

  useEffect(() => {
    inputRef.current.indeterminate = isIndeterminate;
  }, [isIndeterminate, inputRef]);

  const styles = getStyles({ isDisabled, type });
  const handleChange = useCallback(
    (e) => {
      e.persist();
      if (isDisabled) return;
      if (onChange) {
        onChange(e);
      }
      setChecked((checked) => !checked);
    },
    [onChange, isDisabled],
  );

  const handleFocus = useCallback(
    (e) => {
      e.persist();
      if (onFocus) {
        onFocus(e);
      }
    },
    [onFocus],
  );

  const handleBlur = useCallback(
    (e) => {
      e.persist();
      if (onBlur) {
        onBlur(e);
      }
    },
    [onBlur],
  );

  const handleKeyDown = useCallback(
    (e) => {
      e.persist();
      if (willBlurOnEsc && e.key === 'Escape') {
        inputRef?.current?.blur();
      }
      if (onKeyDown) {
        onKeyDown(e);
      }
    },
    [willBlurOnEsc, onKeyDown, inputRef],
  );

  return (
    <Flex
      as="label"
      className={cx(styles.wrapper, className)}
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
        aria-checked={isIndeterminate ? 'mixed' : checked}
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
    </Flex>
  );
}

export const BaseCheckbox = React.forwardRef(_BaseCheckbox);
