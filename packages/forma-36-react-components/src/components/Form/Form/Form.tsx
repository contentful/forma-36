import React, { Component } from 'react';
import cn from 'classnames';

const styles = require('./Form.css');

interface FormProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLFormElement>,
    HTMLFormElement
  > {
  extraClassNames?: string;
  children: React.ReactNode;
  onSubmit?: () => void;
  spacing?: 'condensed' | 'default';
  testId?: string;
}

export class Form extends Component<FormProps> {
  static defaultProps = {
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
