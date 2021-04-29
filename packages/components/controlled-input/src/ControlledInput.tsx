import React, {
  HTMLProps,
  EventHandler,
  ChangeEvent,
  FocusEvent,
  KeyboardEvent,
  useCallback,
  useRef,
  useEffect,
} from 'react';
import { cx } from 'emotion';
import { Done, Minus } from '@contentful/f36-icons';
import type { IconProps } from '@contentful/f36-icons';

import { styles } from './ControlledInput.styles';
import { Box, BoxProps } from '@contentful/f36-core';

export interface ControlledInputProps
  extends Omit<HTMLProps<HTMLInputElement>, 'ref'> {
  id?: string;
  required?: boolean;
  labelText: string;
  checked?: boolean;
  onChange?: EventHandler<ChangeEvent<HTMLInputElement>>;
  name?: string;
  onBlur?: EventHandler<FocusEvent<HTMLInputElement>>;
  onFocus?: EventHandler<FocusEvent<HTMLInputElement>>;
  value?: string;
  disabled?: boolean;
  type?: 'checkbox' | 'radio';
  className?: string;
  testId?: string;
  willBlurOnEsc?: boolean;
  indeterminate?: boolean;
  boxProps?: BoxProps<'div'>;
}

const _ControlledInput = (
  {
    checked,
    className,
    disabled = false,
    id,
    labelText,
    name,
    onBlur,
    onChange,
    onFocus,
    required = false,
    testId = 'cf-ui-controlled-input',
    type = 'checkbox',
    value,
    willBlurOnEsc = true,
    indeterminate,
    boxProps,
    ...otherProps
  }: ControlledInputProps,
  ref: React.Ref<HTMLDivElement>,
) => {
  const inputRef = useRef(null);

  const inputClassnames = cx(styles.input, {
    [styles.inputRadioButton]: type === 'radio',
    [styles.inputCheckbox]: type === 'checkbox',
    [styles.inputDisabled]: disabled,
  });

  const wrapperClassnames = cx(styles.container, className);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent<HTMLInputElement>) => {
      e.persist();

      if (e.nativeEvent.code === 'Escape' && willBlurOnEsc) {
        e.currentTarget.blur();
      }
    },
    [willBlurOnEsc],
  );

  useEffect(() => {
    inputRef.current.indeterminate = indeterminate;
  }, [indeterminate]);

  const iconProps: IconProps = {
    size: 'medium',
    variant: disabled ? 'secondary' : 'white',
  };

  return (
    <Box
      as="div"
      display="inline-block"
      className={wrapperClassnames}
      ref={ref}
      {...boxProps}
    >
      <input
        className={inputClassnames}
        value={value}
        name={name}
        checked={checked}
        type={type}
        ref={inputRef}
        data-test-id={testId}
        onChange={(e) => {
          if (onChange) {
            onChange(e);
          }
        }}
        onBlur={(e) => {
          if (onBlur) {
            onBlur(e);
          }
        }}
        onFocus={(e) => {
          if (onFocus) {
            onFocus(e);
          }
        }}
        aria-label={labelText}
        id={id}
        required={required}
        disabled={disabled}
        onKeyDown={handleKeyDown}
        {...otherProps}
      />
      {type === 'radio' ? (
        // eslint-disable-next-line jsx-a11y/label-has-associated-control
        <label
          className={cx(styles.ghost, styles.ghostRadioButton)}
          htmlFor={id}
        />
      ) : (
        <label className={cx(styles.ghost, styles.ghostCheckbox)} htmlFor={id}>
          {indeterminate ? <Minus {...iconProps} /> : <Done {...iconProps} />}
        </label>
      )}
    </Box>
  );
};

export const ControlledInput = React.forwardRef(_ControlledInput);
