import { cx } from 'emotion';
import React, { forwardRef, type ReactNode } from 'react';
import { getFormLabelStyles } from './FormLabel.styles';
import { useFormControl } from '../FormControl/FormControlContext';
import type {
  CommonProps,
  MarginProps,
  PolymorphicProps,
  PolymorphicComponent,
  ExpandProps,
} from '@contentful/f36-core';
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
  /**
   * Defines how the element will be rendered
   * @default label
   */
  as?: 'label' | 'legend';
}

const FORM_LABEL_DEFAULT_TAG = 'label';

export type FormLabelProps<
  E extends React.ElementType = typeof FORM_LABEL_DEFAULT_TAG,
> = PolymorphicProps<FormLabelInternalProps, E>;

function _FormLabel<
  E extends React.ElementType = typeof FORM_LABEL_DEFAULT_TAG,
>(
  {
    as,
    children,
    className,
    isRequired,
    requiredText = 'required',
    testId = 'cf-ui-form-label',
    ...otherProps
  }: FormLabelProps<E>,
  forwardedRef: React.Ref<HTMLLabelElement>,
) {
  const styles = getFormLabelStyles();
  const formControlProps = useFormControl({ isRequired });

  const id = formControlProps.id ? formControlProps.id + '-label' : undefined;

  const labelProps =
    as !== 'legend'
      ? {
          htmlFor: otherProps.htmlFor || formControlProps.id,
        }
      : {};

  const Element: React.ElementType = as || FORM_LABEL_DEFAULT_TAG;

  return (
    <Text
      as={Element}
      marginBottom="spacingXs"
      {...otherProps}
      fontColor="gray900"
      id={id}
      {...labelProps}
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

_FormLabel.displayName = 'FormLabel';

export const FormLabel: PolymorphicComponent<
  ExpandProps<FormLabelInternalProps>,
  typeof FORM_LABEL_DEFAULT_TAG
> = forwardRef(_FormLabel);
