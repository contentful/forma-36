import React, { Component, EventHandler, ChangeEvent, FocusEvent } from 'react';
import cn from 'classnames';

const styles = require('./ControlledInput.css');

export interface ControlledInputPropTypes {
  id?: string;
  isRequired?: boolean;
  labelText: string;
  isChecked?: boolean;
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
  isRequired: false,
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
      isRequired,
      isDisabled,
      onFocus,
      onBlur,
      name,
      onChange,
      isChecked,
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
        checked={this.props.isChecked}
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
        required={isRequired}
        disabled={isDisabled}
        {...otherProps}
      />
    );
  }
}

export default ControlledInput;
