import React, {
  EventHandler,
  ChangeEvent,
  FocusEvent,
  KeyboardEvent,
  useCallback,
} from 'react';
import cn from 'classnames';

import styles from './ControlledInput.css';

export interface ControlledInputPropTypes {
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
}

export const ControlledInput = ({
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
  ...otherProps
}: ControlledInputPropTypes) => {
  const classNames = cn(styles['ControlledInput'], className, {
    [styles['ControlledInput--disabled']]: disabled,
  });

  const handleKeyDown = useCallback(
    (e: KeyboardEvent<HTMLInputElement>) => {
      e.persist();

      if (e.nativeEvent.code === 'Escape' && willBlurOnEsc) {
        e.currentTarget.blur();
      }
    },
    [willBlurOnEsc],
  );

  return (
    <input
      className={classNames}
      value={value}
      name={name}
      checked={checked}
      type={type}
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
  );
};

export default ControlledInput;
