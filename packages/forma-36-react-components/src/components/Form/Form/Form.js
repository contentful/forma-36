import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import styles from './Form.css';

class Form extends React.Component {
  static propTypes = {
    extraClassNames: PropTypes.string,
    children: PropTypes.node.isRequired,
    onSubmit: PropTypes.func,
    spacing: PropTypes.oneOf(['condensed', 'default']),
    testId: PropTypes.string,
  };

  static defaultProps = {
    extraClassNames: undefined,
    spacing: 'default',
    testId: 'cf-ui-form',
    onSubmit: () => {},
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit();
  };

  render() {
    const {
      extraClassNames,
      children,
      testId,
      onSubmit,
      spacing,
      ...otherProps
    } = this.props;

    const classNames = cn(styles.Form, extraClassNames);

    const formItemClassNames = cn(
      styles.Form__item,
      styles[`Form__item--${spacing}`],
    );

    return (
      <form
        className={classNames}
        data-test-id={testId}
        onSubmit={this.handleSubmit}
        {...otherProps}
      >
        {React.Children.map(children, child => (
          <div className={formItemClassNames}>{child}</div>
        ))}
      </form>
    );
  }
}

export default Form;
