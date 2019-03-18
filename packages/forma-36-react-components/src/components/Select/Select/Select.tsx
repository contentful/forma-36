import React, { Component, ChangeEventHandler, FocusEventHandler } from 'react';
import cn from 'classnames';
import Icon from '../../Icon/Icon';
import styles from './Select.css';

export type SelectProps = {
  required?: boolean;
  children: React.ReactNode;
  name?: string;
  id?: string;
  hasError?: boolean;
  value?: string;
  isDisabled?: boolean;
  onChange?: ChangeEventHandler;
  onBlur?: FocusEventHandler;
  testId?: string;
  onFocus?: FocusEventHandler;
  className?: string;
  width?: 'auto' | 'small' | 'medium' | 'large' | 'full';
} & typeof defaultProps;

export interface SelectState {
  value?: string;
}

const defaultProps = {
  testId: 'cf-ui-select',
  required: false,
  hasError: false,
  isDisabled: false,
  width: 'full',
};

export class Select extends Component<SelectProps, SelectState> {
  static defaultProps = defaultProps;

  state = {
    value: this.props.value,
  };

  componentWillReceiveProps(nextProps: SelectProps) {
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
      className,
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
      className,
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
              if (onChange) {
                onChange(e);
              }
            }
          }}
          onBlur={onBlur}
          {...otherProps}
        >
          {children}
        </select>
        <Icon
          className={styles['Select__icon']}
          icon="ArrowDown"
          color="muted"
        />
      </div>
    );
  }
}

export default Select;
