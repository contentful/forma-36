import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import styles from './Select.css';
import Icon from '../../Icon/Icon';

class Select extends React.Component {
  static propTypes = {
    required: PropTypes.bool,
    children: PropTypes.node.isRequired,
    name: PropTypes.string,
    id: PropTypes.string,
    hasError: PropTypes.bool,
    value: PropTypes.string,
    isDisabled: PropTypes.bool,
    onChange: PropTypes.func,
    onBlur: PropTypes.func,
    testId: PropTypes.string,
    onFocus: PropTypes.func,
    extraClassNames: PropTypes.string,
    width: PropTypes.oneOf(['auto', 'small', 'medium', 'large', 'full']),
  };

  static defaultProps = {
    name: undefined,
    id: undefined,
    extraClassNames: undefined,
    testId: 'cf-ui-select',
    required: false,
    hasError: false,
    isDisabled: false,
    width: 'full',
    value: undefined,
    onBlur: () => {},
    onFocus: () => {},
    onChange: () => {},
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
      id,
      name,
      required,
      children,
      width,
      extraClassNames,
      testId,
      onChange,
      onBlur,
      onFocus,
      isDisabled,
      hasError,
      ...otherProps
    } = this.props;

    const widthClass = `Select--${width}`;
    const classNames = cn(styles.Select, {
      [styles['Select--disabled']]: isDisabled,
      [styles['Select--negative']]: hasError,
    });

    const wrapperClassNames = cn(
      styles.Select__wrapper,
      styles[widthClass],
      extraClassNames,
    );

    return (
      <div className={wrapperClassNames}>
        <select
          id={id}
          required={required}
          name={name}
          aria-label={name}
          // but select doesn't support for attribute :(
          htmlFor={name}
          data-test-id={testId}
          className={classNames}
          value={this.state.value}
          disabled={isDisabled}
          onFocus={onFocus}
          onChange={e => {
            if (!isDisabled) {
              this.setState({
                value: e.target.value,
              });
              onChange(e);
            }
          }}
          onBlur={onBlur}
          {...otherProps}
        >
          {children}
        </select>
        <Icon
          extraClassNames={styles.Select__icon}
          icon="ArrowDown"
          color="muted"
        />
      </div>
    );
  }
}

export default Select;
