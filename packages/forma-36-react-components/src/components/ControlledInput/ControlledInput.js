import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import styles from './ControlledInput.css';

export const ControlledInputPropTypes = {
  extraClassNames: PropTypes.string,
  id: PropTypes.string,
  required: PropTypes.bool,
  labelText: PropTypes.string.isRequired,
  testId: PropTypes.string,
  checked: PropTypes.bool,
  onChange: PropTypes.func,
  name: PropTypes.string,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
  value: PropTypes.string,
  disabled: PropTypes.bool,
  type: PropTypes.oneOf(['checkbox', 'radio']),
};

export const ControlledInputDefaultProps = {
  id: undefined,
  extraClassNames: undefined,
  onChange: undefined,
  onBlur: undefined,
  testId: 'cf-ui-controlled-input',
  onFocus: undefined,
  checked: undefined,
  value: undefined,
  name: undefined,
  required: false,
  disabled: false,
  type: 'checkbox',
};

class ControlledInput extends React.Component {
  static propTypes = ControlledInputPropTypes;

  static defaultProps = ControlledInputDefaultProps;

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

    const classNames = cn(styles.ControlledInput, extraClassNames, {
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
        onBlur={onBlur && onBlur}
        onFocus={onFocus && onFocus}
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
