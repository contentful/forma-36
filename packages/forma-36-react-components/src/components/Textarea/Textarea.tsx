import React, {
  useState,
  useEffect,
  KeyboardEvent,
  FocusEventHandler,
  ChangeEventHandler,
  KeyboardEventHandler,
  RefObject,
  ChangeEvent,
  useCallback,
} from 'react';
import cn from 'classnames';

import styles from './Textarea.css';

export interface TextareaProps {
  name?: string;
  id?: string;
  testId?: string;
  placeholder?: string;
  className?: string;
  width?: 'small' | 'medium' | 'large' | 'full';
  maxLength?: number;
  required?: boolean;
  disabled?: boolean;
  value?: string;
  rows?: number;
  error?: boolean;
  onChange?: ChangeEventHandler<HTMLTextAreaElement>;
  onBlur?: FocusEventHandler<HTMLTextAreaElement>;
  onFocus?: FocusEventHandler<HTMLTextAreaElement>;
  onKeyPress?: KeyboardEventHandler<HTMLTextAreaElement>;
  onKeyDown?: KeyboardEventHandler<HTMLTextAreaElement>;
  onKeyUp?: KeyboardEventHandler<HTMLTextAreaElement>;
  willBlurOnEsc?: boolean;
  textareaRef?: RefObject<HTMLTextAreaElement>;
}

export const Textarea = ({
  className,
  disabled = false,
  error,
  id,
  maxLength,
  name,
  onBlur,
  onChange,
  onKeyDown,
  placeholder,
  required = false,
  rows,
  testId = 'cf-ui-textarea',
  textareaRef,
  value,
  width = 'full',
  willBlurOnEsc = true,
  ...otherProps
}: TextareaProps) => {
  const [valueState, setValueState] = useState<string | undefined>(value);

  useEffect(() => {
    setValueState(value);
  }, [value]);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent<HTMLTextAreaElement>) => {
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

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLTextAreaElement>) => {
      e.persist();
      setValueState(e.target.value);
      if (onChange) {
        onChange(e);
      }
    },
    [onChange],
  );

  const widthClass = `Textarea--${width}`;
  const classNames = cn(styles['Textarea'], className, styles[widthClass], {
    [styles['Textarea--disabled']]: disabled,
    [styles['Textarea--negative']]: error,
  });

  return (
    <div className={classNames}>
      <textarea
        data-test-id={testId}
        aria-label={name}
        className={styles['Textarea__textarea']}
        id={id}
        rows={rows}
        onBlur={onBlur}
        disabled={disabled}
        placeholder={placeholder}
        name={name}
        onChange={handleChange}
        maxLength={maxLength}
        value={disabled ? value : valueState}
        onKeyDown={handleKeyDown}
        required={required}
        ref={textareaRef}
        {...otherProps}
      />
    </div>
  );
};
