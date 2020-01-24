import React, {
  Component,
  EventHandler,
  ChangeEvent,
  FocusEvent,
  KeyboardEvent,
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

const defaultProps = {
  testId: 'cf-ui-controlled-input',
  required: false,
  disabled: false,
  type: 'checkbox',
  willBlurOnEsc: true,
};

export class ControlledInput extends Component<
  ControlledInputPropTypes & typeof defaultProps
> {
  static defaultProps = defaultProps;

  handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    const ESC = 27;

    if (e.keyCode === ESC && this.props.willBlurOnEsc) {
      e.currentTarget.blur();
    }
  };

  render() {
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
    } = this.props;

    const classNames = cn(styles['ControlledInput'], className, {
      [styles['ControlledInput--disabled']]: disabled,
    });

    return (
      <input
        className={classNames}
        value={value}
        name={name}
        checked={this.props.checked}
        type={type}
        data-test-id={testId}
        onChange={e => {
          if (onChange) {
            onChange(e);
          }
        }}
        onBlur={e => {
          if (onBlur) {
            onBlur(e);
          }
        }}
        onFocus={e => {
          if (onFocus) {
            onFocus(e);
          }
        }}
        aria-label={labelText}
        id={id}
        required={required}
        disabled={disabled}
        onKeyDown={this.handleKeyDown}
        {...otherProps}
      />
    );
  }
}

export default ControlledInput;
