import { cx } from 'emotion';
import React, { forwardRef } from 'react';
import type { ReactNode } from 'react';
import type { PropsWithHTMLElement } from '@contentful/f36-core';
import { getFormLabelStyles } from './FormLabel.styles';
import { useFormControl } from '../form-control/FormControlContext';
import { CommonProps, MarginProps } from '@contentful/f36-core';
import { Text } from '@contentful/f36-typography';

export interface FormLabelInternalProps extends CommonProps, MarginProps {
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
    isRequired,
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
    <Text
      as="label"
      marginBottom="spacingS"
      {...otherProps}
      fontColor="gray900"
      id={id}
      htmlFor={htmlFor}
      className={cx(styles.root, className)}
      ref={forwardedRef}
      testId={testId}
    >
      {children}
      {formControlProps.isRequired && (
        <span className={styles.indicator}>({requiredText})</span>
      )}
    </Text>
  );
}

export const FormLabel = forwardRef(_FormLabel);
