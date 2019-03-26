import React, {
  Component,
  RefObject,
  FocusEvent,
  ChangeEventHandler,
  FocusEventHandler,
} from 'react';
import cn from 'classnames';
import CopyButton from '../CopyButton';
import styles from './TextInput.css';

export type TextInputProps = {
  width?: 'small' | 'medium' | 'large' | 'full';
  type?: 'text' | 'password' | 'email' | 'number' | 'search' | 'url';
  name?: string;
  id?: string;
  className?: string;
  withCopyButton?: boolean;
  placeholder?: string;
  onChange?: ChangeEventHandler;
  isDisabled?: boolean;
  testId?: string;
  maxLength?: number;
  onBlur?: FocusEventHandler;
  onCopy?: (value: string) => void;
  value?: string;
  inputRef?: RefObject<HTMLInputElement>;
  error?: boolean;
  isRequired?: boolean;
} & typeof defaultProps;

export interface TextInputState {
  value?: string;
}

const defaultProps = {
  withCopyButton: false,
  testId: 'cf-ui-text-input',
  isDisabled: false,
  isRequired: false,
  width: 'full',
};

export class TextInput extends Component<TextInputProps, TextInputState> {
  static defaultProps = defaultProps;

  state = {
    value: this.props.value,
  };

  componentWillReceiveProps(nextProps: TextInputProps) {
    if (this.props.value !== nextProps.value) {
      this.setState({
        value: nextProps.value,
      });
    }
  }

  handleFocus = (e: FocusEvent) => {
    if (this.props.isDisabled) {
      (e.target as HTMLInputElement).select();
    }
  };

  render() {
    const {
      className,
      withCopyButton,
      placeholder,
      maxLength,
      isDisabled,
      isRequired,
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
      ...otherProps
    } = this.props;

    const widthClass = `TextInput--${width}`;
    const classNames = cn(styles['TextInput'], className, styles[widthClass], {
      [styles['TextInput--is-disabled']]: isDisabled,
      [styles['TextInput--negative']]: error,
    });

    return (
      <div className={classNames}>
        <input
          aria-label={name}
          className={styles['TextInput__input']}
          id={id}
          name={name}
          required={isRequired}
          placeholder={placeholder}
          maxLength={maxLength}
          data-test-id={testId}
          disabled={isDisabled}
          onBlur={onBlur}
          onFocus={this.handleFocus}
          onChange={e => {
            if (isDisabled) return;

            if (onChange) {
              onChange(e);
            }
            this.setState({ value: e.target.value });
          }}
          value={this.state.value}
          type={type}
          ref={inputRef}
          {...otherProps}
        />
        {withCopyButton && (
          <CopyButton
            onCopy={onCopy}
            copyValue={this.state.value}
            className={styles['TextInput__copy-button']}
          />
        )}
      </div>
    );
  }
}

export default TextInput;
