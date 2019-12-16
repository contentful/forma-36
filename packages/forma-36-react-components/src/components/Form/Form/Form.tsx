import React, { Component, FormEventHandler, FormEvent } from 'react';
import cn from 'classnames';

const styles = require('./Form.css');

export type FormProps = {
  onSubmit?: FormEventHandler;
  testId?: string;
  style?: React.CSSProperties;
  className?: string;
  children: React.ReactChild | React.ReactNodeArray;
} & typeof defaultProps;

const defaultProps = {
  testId: 'cf-ui-form',
};

export class Form extends Component<FormProps> {
  static defaultProps = defaultProps;

  handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (this.props.onSubmit) {
      this.props.onSubmit(event);
    }
  };

  render() {
    const { className, children, testId, onSubmit, ...otherProps } = this.props;

    const classNames = cn(styles.Form, className);

    return (
      <form
        className={classNames}
        data-test-id={testId}
        onSubmit={this.handleSubmit}
        {...otherProps}
      >
        {React.Children.map(children, child => {
          if (child) {
            return <div className={styles.Form__item}>{child}</div>;
          }
          return null;
        })}
      </form>
    );
  }
}

export default Form;
