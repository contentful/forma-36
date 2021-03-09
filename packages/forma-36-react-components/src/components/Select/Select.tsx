import React, {
  useCallback,
  useEffect,
  useState,
  ChangeEventHandler,
  FocusEventHandler,
  KeyboardEvent,
  ChangeEvent,
  ReactNode,
} from 'react';
import cn from 'classnames';
import { Icon } from '../Icon';
import styles from './Select.css';

export interface SelectProps {
  required?: boolean;
  name?: string;
  id?: string;
  hasError?: boolean;
  value?: string;
  isDisabled?: boolean;
  onChange?: ChangeEventHandler<HTMLSelectElement>;
  onBlur?: FocusEventHandler<HTMLSelectElement>;
  onFocus?: FocusEventHandler<HTMLSelectElement>;
  width?: 'auto' | 'small' | 'medium' | 'large' | 'full';
  testId?: string;
  className?: string;
  children: ReactNode;
  willBlurOnEsc?: boolean;
}

export const Select = ({
  children,
  className,
  hasError = false,
  id,
  isDisabled = false,
  name,
  onBlur,
  onChange,
  onFocus,
  required = false,
  testId = 'cf-ui-select',
  value,
  width = 'full',
  willBlurOnEsc = true,
  ...otherProps
}: SelectProps) => {
  const [valueState, setValueState] = useState<string | undefined>(value);

  const handleKeyDown = (e: KeyboardEvent<HTMLSelectElement>) => {
    if (e.nativeEvent.code === 'Escape' && willBlurOnEsc) {
      e.currentTarget.blur();
    }
  };

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLSelectElement>) => {
      if (!isDisabled) {
        setValueState(e.target.value);

        if (onChange) {
          onChange(e);
        }
      }
    },
    [onChange, isDisabled],
  );

  useEffect(() => {
    setValueState(value);
  }, [value]);

  const widthClass = `Select--${width}`;
  const classNames = cn(styles['Select'], {
    [styles['Select--disabled']]: isDisabled,
    [styles['Select--negative']]: hasError,
  });

  const wrapperClassNames = cn(
    styles['Select__wrapper'],
    styles[widthClass],
    className,
  );

  return (
    <div className={wrapperClassNames}>
      <select
        id={id}
        required={required}
        name={name}
        aria-label={name}
        data-test-id={testId}
        className={classNames}
        value={valueState}
        disabled={isDisabled}
        onFocus={onFocus}
        onChange={handleChange}
        onBlur={onBlur}
        onKeyDown={handleKeyDown}
        {...otherProps}
      >
        {children}
      </select>
      <Icon
        className={styles['Select__icon']}
        icon="ChevronDown"
        color="muted"
      />
    </div>
  );
};
