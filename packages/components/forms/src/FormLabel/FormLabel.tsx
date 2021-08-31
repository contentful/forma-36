import { cx, css } from 'emotion';
import React, { forwardRef } from 'react';
import type { ReactNode } from 'react';
import tokens from '@contentful/f36-tokens';
import { Box } from '@contentful/f36-core';
import type { BoxProps } from '@contentful/f36-core';

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

export type FormLabelProps = FormLabelInternalProps &
  Omit<BoxProps<'label'>, 'as' | 'display' | 'ref'>;

export const FormLabel = forwardRef<HTMLLabelElement, FormLabelProps>(
  function FormLabel(
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
    const shouldShowRequiredText = isRequired && requiredText?.length > 0;

    return (
      <Box
        as="label"
        {...otherProps}
        className={cx(
          css({
            color: tokens.gray900,
            fontFamily: tokens.fontStackPrimary,
            fontSize: tokens.fontSizeM,
            fontWeight: tokens.fontWeightMedium,
            lineHeight: tokens.lineHeightDefault,
            marginBottom: `calc(1rem * (8 / ${tokens.fontBaseDefault}))`,
          }),
          className,
        )}
        display="inline-block"
        ref={forwardedRef}
        testId={testId}
      >
        {children}
        {shouldShowRequiredText && (
          <span
            className={css({
              color: tokens.gray500,
              fontWeight: tokens.fontWeightNormal,
              marginLeft: `calc(1rem * (4 / ${tokens.fontBaseDefault}))`,
            })}
          >
            ({requiredText})
          </span>
        )}
      </Box>
    );
  },
);
