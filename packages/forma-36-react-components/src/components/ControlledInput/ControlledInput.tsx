import React, { Component, EventHandler, ChangeEvent, FocusEvent } from 'react';
import cn from 'classnames';

const styles = require('./ControlledInput.css');

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
  extraClassNames?: string;
  testId?: string;
}

const defaultProps = {
  testId: 'cf-ui-controlled-input',
  required: false,
  disabled: false,
  type: 'checkbox',
};

export class ControlledInput extends Component<
  ControlledInputPropTypes & typeof defaultProps
> {
  static defaultProps = defaultProps;

  render() {
    const {
      extraClassNames,
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
      ...otherProps
    } = this.props;

    const classNames = cn(styles['ControlledInput'], extraClassNames, {
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
        {...otherProps}
      />
    );
  }
}

export default ControlledInput;
