import React, { Component } from 'react';
import cn from 'classnames';
import styles from './Textarea.css';

export interface TextareaProps {
  name?: string;
  id?: string;
  testId?: string;
  placeholder?: string;
  extraClassNames?: string;
  width?: 'small' | 'medium' | 'large' | 'full';
  maxLength?: number;
  required?: boolean;
  onChange?: (...args: any[]) => any;
  disabled?: boolean;
  value?: string;
  rows?: number;
  onBlur?: (...args: any[]) => any;
  error?: boolean;
}

export class Textarea extends Component<TextareaProps> {
  static defaultProps = {
    testId: 'cf-ui-textarea',
    disabled: false,
    required: false,
    width: 'full',
  };

  state = {
    value: this.props.value,
  };

  componentWillReceiveProps(nextProps) {
    if (this.props.value !== nextProps.value) {
      this.setState({
        value: nextProps.value,
      });
    }
  }

  render() {
    const {
      extraClassNames,
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
      ...otherProps
    } = this.props;

    const widthClass = `Textarea--${width}`;
    const classNames = cn(
      styles['Textarea'],
      extraClassNames,
      styles[widthClass],
      {
        [styles['Textarea--disabled']]: disabled,
        [styles['Textarea--negative']]: error,
      },
    );

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
          onChange={e => {
            if (onChange) {
              onChange(e);
            }
            this.setState({ value: e.target.value });
          }}
          maxLength={maxLength}
          value={disabled ? value : this.state && this.state.value}
          {...otherProps}
        />
      </div>
    );
  }
}

export default Textarea;
