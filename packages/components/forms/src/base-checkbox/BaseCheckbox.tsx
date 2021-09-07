import React, { useCallback, useEffect } from 'react';
import { cx } from 'emotion';
import {
  useId,
  useForwardedRef,
  PropsWithHTMLElement,
} from '@contentful/f36-core';
import type { BaseCheckboxInternalProps } from './types';
import { GhostCheckbox } from './GhostCheckbox';
import getStyles from './BaseCheckbox.styles';
import { Text } from '@contentful/f36-typography';

export type BaseCheckboxProps = PropsWithHTMLElement<
  BaseCheckboxInternalProps & { label?: string },
  'label',
  'htmlFor'
>;

function _BaseCheckbox(
  props: BaseCheckboxProps,
  ref: React.Ref<HTMLInputElement>,
) {
  const {
    isChecked = undefined,
    onChange,
    onFocus,
    onBlur,
    onKeyDown,
    type = 'checkbox',
    value,
    isDisabled,
    isIndeterminate,
    isInvalid,
    isRequired = false,
    id,
    willBlurOnEsc = true,
    testId = 'cf-ui-base-checkbox',
    className = '',
    defaultChecked = undefined,
    name,
    inputProps = {},
    children,
    'aria-label': ariaLabel,
    size = 'medium',
    ...otherProps
  } = props;
  const inputRef = useForwardedRef<HTMLInputElement>(ref);
  const inputId = useId(id, type);

  useEffect(() => {
    inputRef.current.indeterminate = isIndeterminate;
  }, [isIndeterminate, inputRef]);

  const styles = getStyles({ isDisabled, type, size });

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

  const ariaChecked =
    typeof isChecked !== undefined ? isChecked : defaultChecked;

  return (
    <Text
      as="label"
      fontColor="gray900"
      className={cx(styles.wrapper, className)}
      htmlFor={inputId}
      testId={testId}
      {...otherProps}
    >
      <input
        {...inputProps}
        aria-label={ariaLabel}
        checked={isChecked}
        defaultChecked={defaultChecked}
        className={styles.input}
        type={type === 'switch' ? 'checkbox' : type}
        onChange={onChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onKeyDown={handleKeyDown}
        value={value}
        disabled={isDisabled}
        role={type}
        aria-checked={isIndeterminate ? 'mixed' : ariaChecked}
        ref={inputRef}
        required={isRequired}
        aria-required={isRequired ? 'true' : undefined}
        aria-invalid={isInvalid ? 'true' : undefined}
        id={inputId}
        name={name}
      />
      <GhostCheckbox
        type={type}
        isDisabled={isDisabled}
        isIndeterminate={isIndeterminate}
        size={size}
      />
      {children}
    </Text>
  );
}

export const BaseCheckbox = React.forwardRef(_BaseCheckbox);
