import React, {
  useState,
  useEffect,
  useCallback,
  RefObject,
  FocusEvent,
  KeyboardEvent,
  ChangeEvent,
  ChangeEventHandler,
} from 'react';
import cn from 'classnames';
import CopyButton from '../CopyButton';
import styles from './TextInput.css';

export type TextInputProps = {
  width?: 'small' | 'medium' | 'large' | 'full';
  isReadOnly?: boolean;
  type?:
    | 'text'
    | 'password'
    | 'email'
    | 'number'
    | 'search'
    | 'url'
    | 'date'
    | 'time';
  name?: string;
  id?: string;
  className?: string;
  withCopyButton?: boolean;
  testId?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  onCopy?: (value: string) => void;
  value?: string;
  inputRef?: RefObject<HTMLInputElement>;
  error?: boolean;
  willBlurOnEsc: boolean;
} & JSX.IntrinsicElements['input'];

const defaultProps: Partial<TextInputProps> = {
  withCopyButton: false,
  testId: 'cf-ui-text-input',
  disabled: false,
  isReadOnly: false,
  required: false,
  width: 'full',
  willBlurOnEsc: true,
};

export const TextInput = (props: TextInputProps) => {
  const {
    className,
    withCopyButton,
    placeholder,
    maxLength,
    disabled,
    required,
    isReadOnly,
    onChange,
    testId,
    onBlur,
    onCopy,
    error,
    width,
    value,
    type,
    name,
    id,
    inputRef,
    willBlurOnEsc,
    onKeyDown,
    ...otherProps
  } = props;

  const [valueState, setValueState] = useState<string | undefined>(value);

  const handleFocus = (e: FocusEvent) => {
    e.persist();
    if (disabled) {
      (e.target as HTMLInputElement).select();
    }
  };

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      e.persist();
      if (disabled || isReadOnly) return;

      if (onChange) {
        onChange(e);
      }
      setValueState(e.currentTarget.value);
    },
    [onChange, disabled, isReadOnly],
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

  const widthClass = `TextInput--${width}`;
  const classNames = cn(styles['TextInput'], className, styles[widthClass], {
    [styles['TextInput--disabled']]: disabled,
    [styles['TextInput--negative']]: error,
    [styles['TextInput--with-copy-button']]: withCopyButton,
  });

  return (
    <div className={classNames}>
      <input
        onKeyDown={handleKeyDown}
        aria-label={name}
        className={styles['TextInput__input']}
        id={id}
        name={name}
        required={required}
        placeholder={placeholder}
        maxLength={maxLength}
        data-test-id={testId}
        disabled={disabled}
        onBlur={onBlur}
        onFocus={handleFocus}
        onChange={handleChange}
        value={valueState}
        type={type}
        ref={inputRef}
        {...otherProps}
      />
      {withCopyButton && (
        <CopyButton
          onCopy={onCopy}
          copyValue={valueState}
          className={styles['TextInput__copy-button']}
        />
      )}
    </div>
  );
};

TextInput.defaultProps = defaultProps;

export default TextInput;
