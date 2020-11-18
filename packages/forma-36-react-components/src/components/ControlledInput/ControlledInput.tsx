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
  willBlurOnEsc: boolean;
}

const defaultProps: Partial<ControlledInputPropTypes> = {
  testId: 'cf-ui-controlled-input',
  required: false,
  disabled: false,
  type: 'checkbox',
  willBlurOnEsc: true,
};

export const ControlledInput = (props: ControlledInputPropTypes) => {
  const {
    className,
    id,
    testId,
    required,
    disabled,
    onFocus,
    onBlur,
    name,
    onChange,
    checked,
    value,
    type,
    labelText,
    willBlurOnEsc,
    ...otherProps
  } = props;

  const classNames = cn(styles['ControlledInput'], className, {
    [styles['ControlledInput--disabled']]: disabled,
  });

  const handleKeyDown = useCallback(
    (e: KeyboardEvent<HTMLInputElement>) => {
      e.persist();
      const ESC = 27;

      if (e.keyCode === ESC && willBlurOnEsc) {
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
      checked={props.checked}
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

ControlledInput.defaultProps = defaultProps;

export default ControlledInput;
