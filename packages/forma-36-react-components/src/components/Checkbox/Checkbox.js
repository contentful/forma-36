import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import styles from './Checkbox.css';

class Checkbox extends React.Component {
  static propTypes = {
    extraClassNames: PropTypes.string,
    id: PropTypes.string,
    required: PropTypes.bool,
    labelText: PropTypes.string.isRequired,
    testId: PropTypes.string,
    checked: PropTypes.bool,
    onChange: PropTypes.func,
    onBlur: PropTypes.func,
    onFocus: PropTypes.func,
    value: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
    disabled: PropTypes.bool,
  };

  static defaultProps = {
    id: undefined,
    extraClassNames: undefined,
    onChange: undefined,
    onBlur: undefined,
    testId: 'cf-ui-checkbox',
    onFocus: undefined,
    checked: false,
    value: undefined,
    required: false,
    disabled: false,
  };

  state = {
    checked: this.props.checked,
  };

  componentWillReceiveProps(newProps) {
    this.setState({
      checked: newProps.checked,
    });
  }

  render() {
    const {
      extraClassNames,
      id,
      testId,
      required,
      disabled,
      onFocus,
      onBlur,
      onChange,
      checked,
      value,
      labelText,
      ...otherProps
    } = this.props;

    const classNames = cn(styles.Checkbox, extraClassNames, {
      [styles['Checkbox--disabled']]: disabled,
    });

    return (
      <input
        className={classNames}
        value={value}
        checked={this.state.checked}
        type="checkbox"
        data-test-id={testId}
        onChange={e => {
          this.setState({
            checked: e.target.checked,
          });

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

export default Checkbox;
