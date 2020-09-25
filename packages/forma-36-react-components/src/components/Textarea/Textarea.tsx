import React, {
  Component,
  KeyboardEvent,
  FocusEventHandler,
  ChangeEventHandler,
  KeyboardEventHandler,
  RefObject,
} from 'react';
import cn from 'classnames';
import styles from './Textarea.css';

export type TextareaProps = {
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
  willBlurOnEsc: boolean;
  textareaRef?: RefObject<HTMLTextAreaElement>;
} & Partial<typeof defaultProps>;

export interface TextareaState {
  value?: string;
}

const defaultProps = {
  testId: 'cf-ui-textarea',
  disabled: false,
  required: false,
  width: 'full',
  willBlurOnEsc: true,
};

export class Textarea extends Component<TextareaProps, TextareaState> {
  static defaultProps = defaultProps;

  state = {
    value: this.props.value,
  };

  UNSAFE_componentWillReceiveProps(nextProps: TextareaProps) {
    if (this.props.value !== nextProps.value) {
      this.setState({
        value: nextProps.value,
      });
    }
  }

  handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    const ESC = 27;

    if (this.props.onKeyDown) {
      this.props.onKeyDown(e);
    }

    if (e.keyCode === ESC && this.props.willBlurOnEsc) {
      e.currentTarget.blur();
    }
  };

  render() {
    const {
      className,
      testId,
      placeholder,
      maxLength,
      onChange,
      disabled,
      required,
      onBlur,
      error,
      width,
      value,
      name,
      rows,
      id,
      willBlurOnEsc,
      textareaRef,
      ...otherProps
    } = this.props;

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
          onChange={(e) => {
            if (onChange) {
              onChange(e);
            }
            this.setState({ value: e.target.value });
          }}
          maxLength={maxLength}
          value={disabled ? value : this.state && this.state.value}
          onKeyDown={this.handleKeyDown}
          ref={textareaRef}
          {...otherProps}
        />
      </div>
    );
  }
}

export default Textarea;
