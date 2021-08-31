import { cx } from 'emotion';
import React, { forwardRef } from 'react';
import type { ReactNode } from 'react';
import type { PolymorphicComponentProps } from '@contentful/f36-core';
import { getFormLabelStyles } from './FormLabel.styles';

export type FormLabelInternalProps = {
  /**
   * Label value to show
   */
  children: ReactNode;
  /**
   * Whether or not the associated input element is required
   *
   * @default false
   */
  isRequired?: boolean;
  /**
   * Custom text to show in parentheses that gets rendered if the associated
   * input is required
   *
   * @default "required"
   */
  requiredText?: string;
};

export type FormLabelProps = PolymorphicComponentProps<
  'label',
  FormLabelInternalProps,
  'as' | 'ref'
>;

export const FormLabel = forwardRef<HTMLLabelElement, FormLabelProps>(function (
  {
    children,
    className,
    isRequired = false,
    requiredText = 'required',
    testId = 'cf-ui-form-label',
    ...otherProps
  },
  forwardedRef,
) {
  const styles = getFormLabelStyles();
  return (
    <label
      {...otherProps}
      className={cx(styles.root, className)}
      ref={forwardedRef}
      data-test-id={testId}
    >
      {children}
      {isRequired && <span className={styles.indicator}>({requiredText})</span>}
    </label>
  );
});

FormLabel.displayName = 'FormLabel';
