import React, {
  Component,
  ChangeEventHandler,
  FocusEventHandler,
  KeyboardEvent,
} from 'react';
import cn from 'classnames';
import Icon from '../Icon';
import styles from './Select.css';

export interface SelectProps {
  required?: boolean;
  name?: string;
  id?: string;
  hasError?: boolean;
  value?: string;
  isDisabled?: boolean;
  onChange?: ChangeEventHandler<HTMLSelectElement>;
  onBlur?: FocusEventHandler<HTMLSelectElement>;
  onFocus?: FocusEventHandler<HTMLSelectElement>;
  width?: 'auto' | 'small' | 'medium' | 'large' | 'full';
  testId?: string;
  className?: string;
  children: React.ReactNode;
  willBlurOnEsc?: boolean;
}

export interface SelectState {
  value?: string;
}

const defaultProps: Partial<SelectProps> = {
  testId: 'cf-ui-select',
  required: false,
  hasError: false,
  isDisabled: false,
  width: 'full',
  willBlurOnEsc: true,
};

export class Select extends Component<SelectProps, SelectState> {
  static defaultProps = defaultProps;

  state = {
    value: this.props.value,
  };

  UNSAFE_componentWillReceiveProps(nextProps: SelectProps) {
    if (this.props.value !== nextProps.value) {
      this.setState({
        value: nextProps.value,
      });
    }
  }

  handleKeyDown = (e: KeyboardEvent<HTMLSelectElement>) => {
    const ESC = 27;

    if (e.keyCode === ESC && this.props.willBlurOnEsc) {
      e.currentTarget.blur();
    }
  };

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
      willBlurOnEsc,
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
          onChange={(e) => {
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
          onKeyDown={this.handleKeyDown}
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
