import React, { Component } from 'react';
import cn from 'classnames';

const styles = require('./FormLabel.css');

interface FormLabelProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLLabelElement>,
    HTMLLabelElement
  > {
  htmlFor: string;
  children: React.ReactNode;
  testId?: string;
  extraClassNames?: string;
  requiredText?: string;
  required?: boolean;
}

export class FormLabel extends Component<FormLabelProps> {
  static defaultProps = {
    testId: 'cf-ui-form-label',
    requiredText: 'required',
    required: false,
  };

  render() {
    const {
      extraClassNames,
      children,
      testId,
      htmlFor,
      requiredText,
      required,
      ...otherProps
    } = this.props;

    const classNames = cn(styles.FormLabel, extraClassNames);

    return (
      <label
        className={classNames}
        data-test-id={testId}
        htmlFor={htmlFor}
        {...otherProps}
      >
        {children}
        {required && !!requiredText.length && (
          <span className={styles['FormLabel__required-text']}>
            ({requiredText})
          </span>
        )}
      </label>
    );
  }
}

export default FormLabel;
