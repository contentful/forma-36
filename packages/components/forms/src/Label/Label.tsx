import { cx, css } from 'emotion';
import React, { forwardRef } from 'react';
import type { HTMLProps } from 'react';
import tokens from '@contentful/f36-tokens';
import { Box } from '@contentful/f36-core';
import type { BoxProps } from '@contentful/f36-core';

export type LabelInternalProps = {
  children: React.ReactText;
  htmlFor: HTMLProps<HTMLLabelElement>['htmlFor'];
  required?: boolean;
  requiredText?: string;
};

export type LabelProps = LabelInternalProps &
  Omit<BoxProps<'label'>, 'as' | 'display' | 'ref'>;

export const Label = forwardRef<HTMLLabelElement, LabelProps>(function Label(
  {
    children,
    className,
    htmlFor,
    required,
    requiredText,
    testId = 'cf-ui-form-label',
    ...otherProps
  },
  forwardedRef,
) {
  const shouldShowRequiredText = required && requiredText?.length > 0;

  return (
    <Box
      as="label"
      {...otherProps}
      className={cx(
        css({
          color: tokens.colorTextDark,
          fontFamily: tokens.fontStackPrimary,
          fontSize: tokens.fontSizeM,
          fontWeight: tokens.fontWeightMedium,
          lineHeight: tokens.lineHeightDefault,
          marginBottom: `calc(1rem * (8 / ${tokens.fontBaseDefault}))`,
        }),
        className,
      )}
      display="inline-block"
      htmlFor={htmlFor}
      ref={forwardedRef}
      testId={testId}
    >
      {children}
      {shouldShowRequiredText ? (
        <span
          className={css({
            color: tokens.colorTextLightest,
            fontWeight: tokens.fontWeightNormal,
            marginLeft: `calc(1rem * (4 / ${tokens.fontBaseDefault}))`,
          })}
        >
          ({requiredText})
        </span>
      ) : null}
    </Box>
  );
});
