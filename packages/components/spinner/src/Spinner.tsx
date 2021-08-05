import { cx, css } from 'emotion';
import React, { forwardRef } from 'react';
import tokens from '@contentful/f36-tokens';
import { Box } from '@contentful/f36-core';
import type {
  CommonProps,
  PolymorphicComponentProps,
} from '@contentful/f36-core';
import type { SpinnerSize, SpinnerVariant } from './types';
import { getStyles } from './Spinner.styles';

const DEFAULT_TAG = 'div';

const variants: { [key in SpinnerVariant]: string } = {
  default: tokens.gray700,
  primary: tokens.colorPrimary,
  white: tokens.colorWhite,
};

export type SpinnerInternalProps = CommonProps & {
  /**
   * Determines the color that will be used in the `fill` property of the SVG
   */
  variant?: SpinnerVariant;
  /**
   * Allows resizing the spinner with any N value. The final size will be NxN pixels
   */
  customSize?: number;
  /**
   * Controls the size of the spinner. The default `medium` size is 20px wide,
   * the `small` size is 14px wide, and the `large` size is 36px wide
   */
  size?: SpinnerSize;
};

export type SpinnerProps = PolymorphicComponentProps<
  'div',
  SpinnerInternalProps
>;

export const Spinner = forwardRef<HTMLDivElement, SpinnerProps>(
  (
    {
      className,
      customSize,
      size = 'medium',
      variant = 'default',
      testId = 'cf-ui-spinner',
      ...otherProps
    },
    forwardedRef,
  ) => {
    const styles = getStyles();
    return (
      <Box
        as={DEFAULT_TAG}
        display="inline-block"
        {...otherProps}
        className={cx(styles.root({ size, customSize }), className)}
        ref={forwardedRef}
        testId={testId}
      >
        <svg
          className={css({
            display: 'block',
            fill: variants[variant],
          })}
          viewBox="0 0 60 51"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Loading…</title>
          <g
            className={styles.circle1Translate}
            transform="translate(10,33.528168)"
          >
            <g className={styles.circle1Scale}>
              <circle r="6" transform="translate(0,10.471832)" />
            </g>
          </g>

          <g
            className={styles.circle2Translate}
            transform="translate(30,33.528168)"
          >
            <g className={styles.circle2Scale}>
              <circle r="6" transform="translate(0,10.471832)" />
            </g>
          </g>

          <g
            className={styles.circle3Translate}
            transform="translate(50,33.528168)"
          >
            <g className={styles.circle3Scale}>
              <circle r="6" transform="translate(0,10.471832)" />
            </g>
          </g>
        </svg>
      </Box>
    );
  },
);

Spinner.displayName = 'Spinner';
