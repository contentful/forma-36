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
  isDisabled?: boolean;
  type?: 'checkbox' | 'radio';
  className?: string;
  testId?: string;
}

const defaultProps = {
  testId: 'cf-ui-controlled-input',
  required: false,
  isDisabled: false,
  type: 'checkbox',
};

export class ControlledInput extends Component<
  ControlledInputPropTypes & typeof defaultProps
> {
  static defaultProps = defaultProps;

  render() {
    const {
      className,
      id,
      testId,
      required,
      isDisabled,
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

    const classNames = cn(styles['ControlledInput'], className, {
      [styles['ControlledInput--is-disabled']]: isDisabled,
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
        disabled={isDisabled}
        {...otherProps}
      />
    );
  }
}

export default ControlledInput;
