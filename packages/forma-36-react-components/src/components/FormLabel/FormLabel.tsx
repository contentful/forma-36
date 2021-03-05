import React from 'react';
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

export const FormLabel = ({
  children,
  className,
  htmlFor,
  required = false,
  requiredText = 'required',
  testId = 'cf-ui-form-label',
  ...otherProps
}: FormLabelProps) => {
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
};
