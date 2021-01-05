import React, {
  EventHandler,
  ChangeEvent,
  FocusEvent,
  KeyboardEvent,
  useCallback,
} from 'react';
import cn from 'classnames';
import Icon from '../Icon';

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
  const classNames = cn(styles['ControlledInput'], {
    [styles['ControlledInput--disabled']]: disabled,
  });

  const wrapperClassname = cn(className, {
    [styles['RadioButton']]: type === 'radio',
    [styles['Checkbox']]: type === 'checkbox',
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
    <div className={wrapperClassname}>
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
      {type === 'radio' ? (
        /* eslint-disable-next-line jsx-a11y/label-has-associated-control */
        <label className={styles['RadioButton__ghost']} htmlFor={id} />
      ) : (
        <label className={styles['Checkbox__ghost']} htmlFor={id}>
          {checked && (
            <Icon
              icon="Done"
              color={disabled ? 'secondary' : 'white'}
              size="medium"
            />
          )}
        </label>
      )}
    </div>
  );
};

export default ControlledInput;
