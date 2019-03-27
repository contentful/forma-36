import React, { Component } from 'react';
import cn from 'classnames';

const styles = require('./FormLabel.css');

export type FormLabelProps = {
  htmlFor: string;
  children: React.ReactNode;
  testId?: string;
  className?: string;
  requiredText?: string;
  isRequired?: boolean;
} & typeof defaultProps;

const defaultProps = {
  testId: 'cf-ui-form-label',
  requiredText: 'required',
  isRequired: false,
};

export class FormLabel extends Component<FormLabelProps> {
  static defaultProps = defaultProps;

  render() {
    const {
      className,
      children,
      testId,
      htmlFor,
      requiredText,
      isRequired,
      ...otherProps
    } = this.props;

    const classNames = cn(styles.FormLabel, className);

    return (
      <label
        className={classNames}
        data-test-id={testId}
        htmlFor={htmlFor}
        {...otherProps}
      >
        {children}
        {isRequired && !!requiredText.length && (
          <span className={styles['FormLabel__required-text']}>
            ({requiredText})
          </span>
        )}
      </label>
    );
  }
}

export default FormLabel;
