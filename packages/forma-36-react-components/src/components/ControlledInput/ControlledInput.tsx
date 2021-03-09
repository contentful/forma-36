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
import cn from 'classnames';

import { Icon } from '../Icon';
import styles from './ControlledInput.css';

export interface ControlledInputProps extends HTMLProps<HTMLInputElement> {
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
  indeterminate,
  ...otherProps
}: ControlledInputProps) => {
  const inputRef = useRef(null);

  const classNames = cn(styles['ControlledInput'], {
    [styles['ControlledInput--disabled']]: disabled,
  });

  const wrapperClassname = cn(
    {
      [styles['RadioButton']]: type === 'radio',
      [styles['Checkbox']]: type === 'checkbox',
    },
    className,
  );

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

  return (
    <div className={wrapperClassname}>
      <input
        className={classNames}
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
        /* eslint-disable-next-line jsx-a11y/label-has-associated-control */
        <label
          className={cn(styles['Input__ghost'], styles['RadioButton__ghost'])}
          htmlFor={id}
        />
      ) : (
        <label
          className={cn(styles['Input__ghost'], styles['Checkbox__ghost'])}
          htmlFor={id}
        >
          <Icon
            icon={indeterminate ? 'Minus' : 'Done'}
            color={disabled ? 'secondary' : 'white'}
            size="medium"
          />
        </label>
      )}
    </div>
  );
};
