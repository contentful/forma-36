import React, {
  useEffect,
  useCallback,
  FocusEvent,
  KeyboardEvent,
  ChangeEvent,
  useState,
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
> = PolymorphicProps<BaseInputInternalProps, E, 'disabled'>;

function _BaseInput<E extends React.ElementType = typeof DEFAULT_TAG>(
  props: BaseInputProps<E>,
  ref: React.Ref<any>,
) {
  const {
    as = DEFAULT_TAG,
    className,
    isDisabled,
    isReadOnly,
    isInvalid,
    id,
    label,
    name,
    onBlur,
    onChange,
    onFocus,
    onKeyDown,
    testId = 'cf-ui-base-input',
    type = 'text',
    value,
    placeholder,
    willBlurOnEsc = true,
    style,
    icon,
    ...otherProps
  } = props;
  const [valueState, setValueState] = useState<string | undefined>(value);
  const styles = getInputStyles({ isDisabled, isInvalid });

  const handleFocus = (e: FocusEvent) => {
    e.persist();
    if (isDisabled || isReadOnly) {
      (e.target as HTMLInputElement).select();
    }
  };

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      e.persist();
      if (isDisabled || isReadOnly) return;

      if (onChange) {
        onChange(e);
      }
      setValueState(e.currentTarget.value);
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

  useEffect(() => {
    setValueState(value);
  }, [value]);

  const iconContent = icon && (
    <Box as="span" className={styles.iconPlaceholder}>
      {React.cloneElement(icon, {
        size: 'small',
        variant: 'muted',
        ariaHiden: true,
      })}
    </Box>
  );

  const Element = as as React.ElementType;

  const inputContent = (iconClassName?: string) => (
    <Element
      {...otherProps}
      data-test-id={testId}
      style={style}
      placeholder={placeholder}
      className={cx(styles.input, iconClassName, className)}
      value={valueState}
      name={name}
      type={type}
      ref={ref}
      aria-label={label}
      id={id}
      disabled={isDisabled}
      onChange={handleChange}
      onBlur={onBlur}
      onKeyDown={handleKeyDown}
      onFocus={handleFocus}
    />
  );

  if (as === 'textarea') {
    return inputContent();
  }

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
