import { cx, css, keyframes } from 'emotion';
import React, { forwardRef } from 'react';
import tokens from '@contentful/f36-tokens';
import { Box } from '@contentful/f36-core';
import type {
  BoxInternalProps,
  PolymorphicComponent,
  PolymorphicComponentProps,
  PolymorphicComponentWithRef,
  Simplify,
} from '@contentful/f36-core';

const DEFAULT_TAG = 'div';

export type SpinnerVariant = Simplify<'primary' | 'default' | 'white'>;

export type SpinnerSize = 'large' | 'medium' | 'small';

const sizes: { [key in SpinnerSize]: string } = {
  large: '36px',
  medium: '20px',
  small: '14px',
};

const variants: { [key in SpinnerVariant]: string } = {
  default: tokens.gray700,
  primary: tokens.colorPrimary,
  white: tokens.colorWhite,
};

const animations = {
  scale1: keyframes`
  0% {
    transform: scale(1, 1);
  }
  6.666667% {
    transform: scale(1.5, 0.5);
  }
  13.333333% {
    transform: scale(1, 1);
  }
  26.666667% {
    transform: scale(1, 1);
  }
  33.333333% {
    transform: scale(1, 1);
  }
  40% {
    transform: scale(1, 1);
  }
  53.333333% {
    transform: scale(1, 1);
  }
  60% {
    transform: scale(1.5, 0.5);
  }
  66.666667% {
    transform: scale(1, 1);
  }
  100% {
    transform: scale(1, 1);
  }
`,
  scale2: keyframes`
  0% {
    transform: scale(1, 1);
  }
  13.333333% {
    transform: scale(1, 1);
  }
  20% {
    transform: scale(1.5, 0.5);
  }
  26.666667% {
    transform: scale(1, 1);
  }
  40% {
    transform: scale(1, 1);
  }
  46.666667% {
    transform: scale(1, 1);
  }
  53.333333% {
    transform: scale(1, 1);
  }
  66.666667% {
    transform: scale(1, 1);
  }
  73.333333% {
    transform: scale(1.5, 0.5);
  }
  80% {
    transform: scale(1, 1);
  }
  100% {
    transform: scale(1, 1);
  }
`,
  scale3: keyframes`
  0% {
    transform: scale(1, 1);
  }
  26.666667% {
    transform: scale(1, 1);
  }
  33.333333% {
    transform: scale(1.5, 0.5);
  }
  40% {
    transform: scale(1, 1);
  }
  53.333333% {
    transform: scale(1, 1);
  }
  60% {
    transform: scale(1, 1);
  }
  66.666667% {
    transform: scale(1, 1);
  }
  80% {
    transform: scale(1, 1);
  }
  86.666667% {
    transform: scale(1.5, 0.5);
  }
  93.333333% {
    transform: scale(1, 1);
  }
  100% {
    transform: scale(1, 1);
  }
`,
  translate1: keyframes`
  0% {
    transform: translate(10px, 33.528168px);
  }
  6.666667% {
    transform: translate(10px, 41.764084px);
  }
  13.333333% {
    transform: translate(10px, 33.528168px);
  }
  26.666667% {
    transform: translate(10px, -2.651608px);
  }
  33.333333% {
    transform: translate(10px, -4.471832px);
  }
  40% {
    transform: translate(10px, -2.651608px);
  }
  53.333333% {
    transform: translate(10px, 33.528168px);
  }
  60% {
    transform: translate(10px, 41.764084px);
  }
  66.666667% {
    transform: translate(10px, 33.528168px);
  }
  100% {
    transform: translate(10px, 33.528168px);
  }
`,
  translate2: keyframes`
  0% {
    transform: translate(30px, 33.528168px);
  }
  13.333333% {
    transform: translate(30px, 33.528168px);
  }
  20% {
    transform: translate(30px, 41.764084px);
  }
  26.666667% {
    transform: translate(30px, 33.528168px);
  }
  40% {
    transform: translate(30px, -2.651608px);
  }
  46.666667% {
    transform: translate(30px, -4.471832px);
  }
  53.333333% {
    transform: translate(30px, -2.651608px);
  }
  66.666667% {
    transform: translate(30px, 33.528168px);
  }
  73.333333% {
    transform: translate(30px, 41.764084px);
  }
  80% {
    transform: translate(30px, 33.528168px);
  }
  100% {
    transform: translate(30px, 33.528168px);
  }
`,
  translate3: keyframes`
  0% {
    transform: translate(50px, 33.528168px);
  }
  26.666667% {
    transform: translate(50px, 33.528168px);
  }
  33.333333% {
    transform: translate(50px, 41.764084px);
  }
  40% {
    transform: translate(50px, 33.528168px);
  }
  53.333333% {
    transform: translate(50px, -2.651608px);
  }
  60% {
    transform: translate(50px, -4.471832px);
  }
  66.666667% {
    transform: translate(50px, -2.651608px);
  }
  80% {
    transform: translate(50px, 33.528168px);
  }
  86.666667% {
    transform: translate(50px, 41.764084px);
  }
  93.333333% {
    transform: translate(50px, 33.528168px);
  }
  100% {
    transform: translate(50px, 33.528168px);
  }
`,
};

const styles = {
  circle1Scale: css({
    animation: `${animations.scale1} 1s linear infinite normal forwards;`,
  }),
  circle2Scale: css({
    animation: `${animations.scale2} 1s linear infinite normal forwards;`,
  }),
  circle3Scale: css({
    animation: `${animations.scale3} 1s linear infinite normal forwards;`,
  }),
  circle1Translate: css({
    animation: `${animations.translate1} 1s linear infinite normal forwards;`,
  }),
  circle2Translate: css({
    animation: `${animations.translate2} 1s linear infinite normal forwards;`,
  }),
  circle3Translate: css({
    animation: `${animations.translate3} 1s linear infinite normal forwards;`,
  }),
};

export type SpinnerInternalProps = {
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
} & BoxInternalProps;

export type SpinnerProps = PolymorphicComponentProps<
  typeof DEFAULT_TAG,
  SpinnerInternalProps
>;

export const _Spinner: PolymorphicComponentWithRef<
  SpinnerInternalProps,
  typeof DEFAULT_TAG
> = (
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
  return (
    <Box
      as={DEFAULT_TAG}
      display="inline-block"
      {...otherProps}
      className={cx(
        css({
          height: customSize ? `${customSize}px` : undefined,
          verticalAlign: 'middle',
          width: customSize ? `${customSize}px` : sizes[size],
        }),
        className,
      )}
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
};

export const Spinner: PolymorphicComponent<
  SpinnerInternalProps,
  typeof DEFAULT_TAG
> = forwardRef(_Spinner);
