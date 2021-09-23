import React, {
  useCallback,
  FocusEvent,
  KeyboardEvent,
  ChangeEvent,
} from 'react';
import { cx } from 'emotion';

import {
  PolymorphicProps,
  PolymorphicComponent,
  Box,
} from '@contentful/f36-core';
import getInputStyles from './BaseInput.styles';
import { BaseInputInternalProps } from './types';

const DEFAULT_TAG = 'input';

export type BaseInputProps<
  E extends React.ElementType = typeof DEFAULT_TAG
> = PolymorphicProps<
  BaseInputInternalProps,
  E,
  'disabled' | 'required' | 'readOnly'
>;

function _BaseInput<E extends React.ElementType = typeof DEFAULT_TAG>(
  props: BaseInputProps<E>,
  ref: React.Ref<HTMLInputElement | HTMLTextAreaElement>,
) {
  const {
    as = DEFAULT_TAG,
    className,
    isDisabled,
    isReadOnly,
    isRequired,
    isInvalid,
    id,
    name,
    onBlur,
    onChange,
    onFocus,
    onKeyDown,
    testId = 'cf-ui-base-input',
    type = 'text',
    value = undefined,
    placeholder,
    willBlurOnEsc = true,
    style,
    icon,
    defaultValue,
    size = 'medium',
    ...otherProps
  } = props;
  const styles = getInputStyles({ as, isDisabled, isInvalid, size });

  const handleFocus = useCallback(
    (e: FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      e.persist();
      if (onFocus) {
        onFocus(e);
      }
    },
    [onFocus],
  );

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      e.persist();
      if (isDisabled || isReadOnly) return;

      if (onChange) {
        onChange(e);
      }
    },
    [onChange, isDisabled, isReadOnly],
  );

  const handleKeyDown = useCallback(
    (e: KeyboardEvent<HTMLInputElement>) => {
      e.persist();

      if (onKeyDown) {
        onKeyDown(e);
      }

      if (e.nativeEvent.code === 'Escape' && willBlurOnEsc) {
        e.currentTarget.blur();
      }
    },
    [willBlurOnEsc, onKeyDown],
  );

  const iconContent = icon && (
    <Box as="span" className={styles.iconPlaceholder}>
      {React.cloneElement(icon, {
        size: size === 'small' ? 'tiny' : 'small',
        variant: 'muted',
        'aria-hidden': true,
      })}
    </Box>
  );

  const Element = as as React.ElementType;

  const inputContent = (iconClassName?: string) => (
    <Element
      {...otherProps}
      value={value}
      defaultValue={defaultValue}
      data-test-id={testId}
      style={style}
      placeholder={placeholder}
      className={cx(styles.input, iconClassName, className)}
      name={name}
      type={type}
      ref={ref}
      id={id}
      readOnly={isReadOnly}
      aria-readonly={isReadOnly ? 'true' : undefined}
      aria-required={isRequired ? 'true' : undefined}
      aria-invalid={isInvalid ? 'true' : undefined}
      disabled={isDisabled}
      required={isRequired}
      onChange={handleChange}
      onBlur={onBlur}
      onKeyDown={handleKeyDown}
      onFocus={handleFocus}
      size={size}
    />
  );

  if (icon) {
    return (
      <Box as="div" className={styles.rootComponentWithIcon}>
        {inputContent(styles.inputWithIcon)}
        {iconContent}
      </Box>
    );
  }

  return inputContent();
}

export const BaseInput: PolymorphicComponent<
  BaseInputInternalProps,
  typeof DEFAULT_TAG,
  'disabled'
> = React.forwardRef(_BaseInput);
