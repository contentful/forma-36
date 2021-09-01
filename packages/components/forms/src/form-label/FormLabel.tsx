import { cx } from 'emotion';
import React, { forwardRef } from 'react';
import type { ReactNode } from 'react';
import type { PropsWithHTMLElement } from '@contentful/f36-core';
import { getFormLabelStyles } from './FormLabel.styles';
import { useFormControl } from '../form-control/FormControlContext';
import { CommonProps } from '@contentful/f36-core';

export interface FormLabelInternalProps extends CommonProps {
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
}

export type FormLabelProps = PropsWithHTMLElement<
  FormLabelInternalProps,
  'label'
>;

function _FormLabel(
  {
    children,
    className,
    isRequired = false,
    requiredText = 'required',
    testId = 'cf-ui-form-label',
    ...otherProps
  }: FormLabelProps,
  forwardedRef: React.Ref<HTMLLabelElement>,
) {
  const styles = getFormLabelStyles();
  const formControlProps = useFormControl({ isRequired });

  const id = formControlProps.id ? formControlProps.id + '-label' : undefined;
  const htmlFor = otherProps['htmlFor'] || formControlProps.id;

  return (
    <label
      {...otherProps}
      id={id}
      htmlFor={htmlFor}
      className={cx(styles.root, className)}
      ref={forwardedRef}
      data-test-id={testId}
    >
      {children}
      {formControlProps.isRequired && (
        <span className={styles.indicator}>({requiredText})</span>
      )}
    </label>
  );
}

export const FormLabel = forwardRef(_FormLabel);
