import React, { forwardRef } from 'react';
import { Box, useId } from '@contentful/f36-core';
import type { CommonProps } from '@contentful/f36-core';

export interface SkeletonContainerProps extends CommonProps {
  /**
   * Background color of the skeleton
   */
  backgroundColor?: string;
  /**
   * Background opacity of the skeleton
   */
  backgroundOpacity?: number;
  /**
   * Whether skeleton has animation or not
   */
  isAnimated?: boolean;
  /**
   * Speed of the animation
   */
  speed?: number | string;
  /**
   * Color of the foreground skeleton items
   */
  foregroundColor?: string;
  /**
   * Opacity of the foreground skeleton items
   */
  foregroundOpacity?: number;
  /**
   * Width of the SVG element
   */
  svgWidth?: string | number;
  /**
   * Height of the SVG element
   */
  svgHeight?: string | number;
  /**
   * Label attribute
   */
  ariaLabel?: string;
  width?: number | string;
  height?: number | string;
  clipId?: string;
  gradientId?: string;
  animateId?: string;
  preserveAspectRatio?: string;
  children: React.ReactNode;
}

export const SkeletonContainer = forwardRef<SVGElement, SkeletonContainerProps>(
  ({
    children,
    testId = 'cf-ui-skeleton-form',
    ariaLabel = 'Loading component...',
    width = '100%',
    height = '100%',
    preserveAspectRatio,
    backgroundColor = '#e5ebed',
    backgroundOpacity = 1,
    isAnimated = true,
    speed = 2,
    foregroundColor = '#f7f9fa',
    foregroundOpacity = 1,
    svgWidth = '100%',
    svgHeight = '100%',
    clipId,
    gradientId,
    animateId,
    ...otherProps
  }) => {
    const uniqueClipId = useId(clipId, 'cf-ui-skeleton-clip');
    const uniqueGradientId = useId(gradientId, 'cf-ui-skeleton-clip-gradient');
    const randomAnimateId = useId(undefined, 'animation');
    const uniqueAnimateId = animateId || randomAnimateId;

    return (
      <Box
        as="svg"
        display="block"
        role="img"
        aria-label={ariaLabel}
        preserveAspectRatio={preserveAspectRatio}
        width={svgWidth}
        height={svgHeight}
        testId={testId}
        {...otherProps}
      >
        {ariaLabel ? <title>{ariaLabel}</title> : null}
        <rect
          x="0"
          y="0"
          width={width}
          height={height}
          clipPath={`url(#${uniqueClipId})`}
          style={{ fill: `url(#${uniqueGradientId})` }}
        />

        <defs>
          <clipPath id={uniqueClipId}>{children}</clipPath>

          <linearGradient id={uniqueGradientId}>
            <stop
              offset="0%"
              stopColor={backgroundColor}
              stopOpacity={backgroundOpacity}
            >
              {isAnimated && (
                <animate
                  id={uniqueAnimateId}
                  attributeName="stop-color"
                  values={`${backgroundColor}; ${foregroundColor}; ${backgroundColor}`}
                  dur={`${speed}s`}
                  repeatCount="indefinite"
                />
              )}
            </stop>
            <stop
              offset="50%"
              stopColor={foregroundColor}
              stopOpacity={foregroundOpacity}
            >
              {isAnimated && (
                <animate
                  attributeName="stop-color"
                  values={`${backgroundColor}; ${foregroundColor}; ${backgroundColor}`}
                  begin={`${uniqueAnimateId}.begin+0.25s`}
                  dur={`${speed}s`}
                  repeatCount="indefinite"
                />
              )}
            </stop>
            <stop
              offset="100%"
              stopColor={backgroundColor}
              stopOpacity={backgroundOpacity}
            >
              {isAnimated && (
                <animate
                  attributeName="stop-color"
                  begin={`${uniqueAnimateId}.begin+0.5s`}
                  values={`${backgroundColor}; ${foregroundColor}; ${backgroundColor}`}
                  dur={`${speed}s`}
                  repeatCount="indefinite"
                />
              )}
            </stop>
          </linearGradient>
        </defs>
      </Box>
    );
  },
);

SkeletonContainer.displayName = 'SkeletonContainer';
