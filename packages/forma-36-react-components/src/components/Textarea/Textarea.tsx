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

export interface TextareaState {
  value?: string;
}

const defaultProps: Partial<TextareaProps> = {
  testId: 'cf-ui-textarea',
  disabled: false,
  required: false,
  width: 'full',
  willBlurOnEsc: true,
};

export const Textarea = (props: TextareaProps) => {
  const {
    className,
    testId,
    placeholder,
    maxLength,
    onChange,
    disabled,
    required,
    onBlur,
    onKeyDown,
    error,
    width,
    value,
    name,
    rows,
    id,
    willBlurOnEsc,
    textareaRef,
    ...otherProps
  } = props;
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
        ref={textareaRef}
        {...otherProps}
      />
    </div>
  );
};

Textarea.defaultProps = defaultProps;

export default Textarea;
