import React, {
  useCallback,
  useState,
  ChangeEventHandler,
  FocusEventHandler,
  KeyboardEvent,
  ChangeEvent,
  ReactNode,
} from 'react';
import cn from 'classnames';
import Icon from '../Icon';
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

const defaultProps: Partial<SelectProps> = {
  testId: 'cf-ui-select',
  required: false,
  hasError: false,
  isDisabled: false,
  width: 'full',
  willBlurOnEsc: true,
};

export const Select = (props: SelectProps) => {
  const {
    id,
    name,
    required,
    children,
    width,
    className,
    testId,
    onChange,
    onBlur,
    onFocus,
    isDisabled,
    hasError,
    value,
    willBlurOnEsc,
    ...otherProps
  } = props;
  const [valueState, setValueState] = useState<string | undefined>(value);

  const handleKeyDown = (e: KeyboardEvent<HTMLSelectElement>) => {
    const ESC = '27';

    if (e.nativeEvent.code === ESC && willBlurOnEsc) {
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
      <Icon className={styles['Select__icon']} icon="ArrowDown" color="muted" />
    </div>
  );
};

Select.defaultProps = defaultProps;

export default Select;
