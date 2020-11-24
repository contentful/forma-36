import React, { Component } from 'react';
import cn from 'classnames';

import styles from './FormLabel.css';

export interface FormLabelProps {
  htmlFor: string;
  children: React.ReactNode;
  testId?: string;
  className?: string;
  requiredText?: string;
  required?: boolean;
}

const defaultProps: Partial<FormLabelProps> = {
  testId: 'cf-ui-form-label',
  requiredText: 'required',
  required: false,
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
      required,
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
        {required! && // eslint-disable-line @typescript-eslint/no-non-null-assertion
        !!requiredText!.length && ( // eslint-disable-line @typescript-eslint/no-non-null-assertion
            <span className={styles['FormLabel__required-text']}>
              ({requiredText})
            </span>
          )}
      </label>
    );
  }
}

export default FormLabel;
