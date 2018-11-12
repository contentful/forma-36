import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import styles from './Textarea.css';

class Textarea extends React.Component {
  static propTypes = {
    name: PropTypes.string,
    id: PropTypes.string,
    testId: PropTypes.string,
    placeholder: PropTypes.string,
    extraClassNames: PropTypes.string,
    width: PropTypes.oneOf(['small', 'medium', 'large', 'full']),
    maxLength: PropTypes.number,
    required: PropTypes.bool,
    onChange: PropTypes.func,
    disabled: PropTypes.bool,
    value: PropTypes.string,
    rows: PropTypes.number,
    onBlur: PropTypes.func,
    error: PropTypes.bool,
  };

  static defaultProps = {
    name: undefined,
    id: undefined,
    extraClassNames: undefined,
    placeholder: undefined,
    testId: 'cf-ui-textarea',
    maxLength: undefined,
    onChange: undefined,
    onBlur: undefined,
    value: undefined,
    error: undefined,
    rows: undefined,
    disabled: false,
    required: false,
    width: 'full',
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
      extraClassNames,
      testId,
      placeholder,
      maxLength,
      onChange,
      disabled,
      required,
      onBlur,
      error,
      width,
      value,
      name,
      rows,
      id,
      ...otherProps
    } = this.props;

    const widthClass = `Textarea--${width}`;
    const classNames = cn(
      styles.Textarea,
      extraClassNames,
      styles[widthClass],
      {
        [styles['Textarea--disabled']]: disabled,
        [styles['Textarea--negative']]: error,
      },
    );

    return (
      <div className={classNames}>
        <textarea
          data-test-id={testId}
          aria-label={name}
          className={styles.Textarea__textarea}
          id={id}
          rows={rows}
          onBlur={onBlur}
          disabled={disabled}
          placeholder={placeholder}
          name={name}
          onChange={e => {
            if (onChange) {
              onChange(e);
            }
            this.setState({ value: e.target.value });
          }}
          maxLength={maxLength}
          value={disabled ? value : this.state && this.state.value}
          {...otherProps}
        />
      </div>
    );
  }
}

export default Textarea;
