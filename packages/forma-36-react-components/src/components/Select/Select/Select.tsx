import React, { Component } from 'react';
import cn from 'classnames';
import Icon from '../../Icon/Icon';
import styles from './Select.css';

export interface SelectProps {
  required?: boolean;
  children: React.ReactNode;
  name?: string;
  id?: string;
  hasError?: boolean;
  value?: string;
  isDisabled?: boolean;
  onChange?: (...args: any[]) => any;
  onBlur?: (...args: any[]) => any;
  testId?: string;
  onFocus?: (...args: any[]) => any;
  extraClassNames?: string;
  width?: 'auto' | 'small' | 'medium' | 'large' | 'full';
}

export interface SelectState {
  value?: string;
}

export class Select extends Component<SelectProps, SelectState> {
  static defaultProps = {
    testId: 'cf-ui-select',
    required: false,
    hasError: false,
    isDisabled: false,
    width: 'full',
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
    const classNames = cn(styles['Select'], {
      [styles['Select--disabled']]: isDisabled,
      [styles['Select--negative']]: hasError,
    });

    const wrapperClassNames = cn(
      styles['Select__wrapper'],
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
          extraClassNames={styles['Select__icon']}
          icon="ArrowDown"
          color="muted"
        />
      </div>
    );
  }
}

export default Select;
