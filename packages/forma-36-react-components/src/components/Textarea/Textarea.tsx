import React, { Component, FocusEventHandler, ChangeEventHandler } from 'react';
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
  isRequired?: boolean;
  onChange?: ChangeEventHandler;
  isDisabled?: boolean;
  value?: string;
  rows?: number;
  onBlur?: FocusEventHandler;
  hasError?: boolean;
} & typeof defaultProps;

export interface TextareaState {
  value?: string;
}

const defaultProps = {
  testId: 'cf-ui-textarea',
  isDisabled: false,
  isRequired: false,
  width: 'full',
};

export class Textarea extends Component<TextareaProps, TextareaState> {
  static defaultProps = defaultProps;

  state = {
    value: this.props.value,
  };

  componentWillReceiveProps(nextProps: TextareaProps) {
    if (this.props.value !== nextProps.value) {
      this.setState({
        value: nextProps.value,
      });
    }
  }

  render() {
    const {
      className,
      testId,
      placeholder,
      maxLength,
      onChange,
      isDisabled,
      isRequired,
      onBlur,
      hasError,
      width,
      value,
      name,
      rows,
      id,
      ...otherProps
    } = this.props;

    const widthClass = `Textarea--${width}`;
    const classNames = cn(styles['Textarea'], className, styles[widthClass], {
      [styles['Textarea--is-disabled']]: isDisabled,
      [styles['Textarea--negative']]: hasError,
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
          disabled={isDisabled}
          placeholder={placeholder}
          name={name}
          onChange={e => {
            if (onChange) {
              onChange(e);
            }
            this.setState({ value: e.target.value });
          }}
          maxLength={maxLength}
          value={isDisabled ? value : this.state && this.state.value}
          required={isRequired}
          {...otherProps}
        />
      </div>
    );
  }
}

export default Textarea;
