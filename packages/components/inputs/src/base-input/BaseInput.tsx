import React, {
  useEffect,
  useCallback,
  FocusEvent,
  KeyboardEvent,
  ChangeEvent,
  useState,
  ElementType,
} from 'react';
import { cx } from 'emotion';

import {
  usePrimitive,
  PolymorphicComponentWithRef,
  PolymorphicComponentProps,
  PolymorphicComponent,
} from '@contentful/f36-core';
import getInputStyles from './BaseInput.styles';
import { BaseInputInternalProps } from './types';

const DEFAULT_TAG: ElementType = 'input';

export type BaseInputProps<
  E extends React.ElementType
> = PolymorphicComponentProps<E, BaseInputInternalProps, 'disabled'>;

const _BaseInput: PolymorphicComponentWithRef<
  BaseInputInternalProps,
  typeof DEFAULT_TAG
> = (props, ref) => {
  const {
    as,
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
    ...otherProps
  } = props;

  const { Element, primitiveProps } = usePrimitive({
    testId,
    as,
    className,
    style,
  });

  const [valueState, setValueState] = useState<string | undefined>(value);

  const styles = getInputStyles({ isDisabled, isInvalid });

  const handleFocus = (e: FocusEvent) => {
    e.persist();
    if (isDisabled) {
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

  if (as === 'textarea') {
    return (
      <Element
        {...otherProps}
        {...primitiveProps}
        data-test-id={testId}
        placeholder={placeholder}
        className={cx(styles.input, className)}
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
  }

  return (
    <Element
      {...otherProps}
      {...primitiveProps}
      data-test-id={testId}
      placeholder={placeholder}
      className={cx(styles.input, className)}
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
};

export const BaseInput: PolymorphicComponent<
  BaseInputInternalProps,
  typeof DEFAULT_TAG,
  'disabled'
> = React.forwardRef(_BaseInput);
