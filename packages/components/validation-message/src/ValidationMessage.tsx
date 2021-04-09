import { cx, css } from 'emotion';
import React, { forwardRef } from 'react';
import tokens from '@contentful/f36-tokens';
import { Box } from '@contentful/f36-core';
import type {
  BoxInternalProps,
  PolymorphicComponent,
  PolymorphicComponentProps,
  PolymorphicComponentWithRef,
} from '@contentful/f36-core';
import { ErrorCircleOutline } from '@contentful/f36-icons';

const DEFAULT_TAG = 'div';

const styles = {
  icon: css({
    marginRight: tokens.spacing2Xs,
    marginTop: `calc(${tokens.spacing2Xs} / 2)`,
    minHeight: '18px',
    minWidth: '18px',
  }),
  root: css({
    display: 'flex',
  }),
  text: css({
    color: tokens.colorNegative,
    fontFamily: tokens.fontStackPrimary,
    fontSize: tokens.fontSizeM,
    lineHeight: tokens.lineHeightDefault,
    margin: 0,
    display: 'inline-block',
  }),
};

export type ValidationMessageInternalProps = BoxInternalProps;

export type ValidationMessageProps = PolymorphicComponentProps<
  typeof DEFAULT_TAG,
  ValidationMessageInternalProps
>;

const _ValidationMessage: PolymorphicComponentWithRef<
  ValidationMessageInternalProps,
  typeof DEFAULT_TAG
> = (
  { className, children, testId = 'cf-ui-validation-message', ...otherProps },
  forwardedRef,
) => {
  return (
    <Box
      {...otherProps}
      className={cx(styles.root, className)}
      ref={forwardedRef}
      testId={testId}
    >
      <ErrorCircleOutline className={styles.icon} variant="negative" />
      <p className={styles.text}>{children}</p>
    </Box>
  );
};

export const ValidationMessage: PolymorphicComponent<
  ValidationMessageInternalProps,
  typeof DEFAULT_TAG
> = forwardRef(_ValidationMessage);
