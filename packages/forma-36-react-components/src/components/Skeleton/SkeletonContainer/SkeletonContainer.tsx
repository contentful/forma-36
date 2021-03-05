import React from 'react';
import cn from 'classnames';
import styles from './SkeletonContainer.css';

export interface SkeletonContainerProps {
  width?: number | string;
  height?: number | string;
  preserveAspectRatio?: string;
  clipId?: string;
  gradientId?: string;
  animateId?: string;
  backgroundColor?: string;
  backgroundOpacity?: number;
  animate?: boolean;
  speed?: number | string;
  foregroundColor?: string;
  foregroundOpacity?: number;
  svgWidth?: string | number;
  svgHeight?: string | number;

  ariaLabel?: string;
  className?: string;
  testId?: string;
  children: React.ReactNode;
}

let idCounter = 0;

export function SkeletonContainer({
  className,
  children,
  testId = 'cf-ui-skeleton-form',
  ariaLabel = 'Loading component...',
  width = '100%',
  height = '100%',
  preserveAspectRatio = 'xMidYMid meet',
  clipId = `cf-ui-skeleton-clip-${idCounter++}`,
  gradientId = `cf-ui-skeleton-clip-gradient-${idCounter++}`,
  animateId = `animation-${idCounter++}`,
  backgroundColor = '#e5ebed',
  backgroundOpacity = 1,
  animate = true,
  speed = 2,
  foregroundColor = '#f7f9fa',
  foregroundOpacity = 1,
  svgWidth = '100%',
  svgHeight = '100%',
  ...otherProps
}: SkeletonContainerProps): React.ReactElement {
  const classNames = cn(styles['SkeletonContainer'], className);

  return (
    <svg
      role="img"
      className={classNames}
      aria-label={ariaLabel}
      preserveAspectRatio={preserveAspectRatio}
      width={svgWidth}
      height={svgHeight}
      data-test-id={testId}
      {...otherProps}
    >
      {ariaLabel ? <title>{ariaLabel}</title> : null}
      <rect
        x="0"
        y="0"
        width={width}
        height={height}
        clipPath={`url(#${clipId})`}
        style={{ fill: `url(#${gradientId})` }}
      />

      <defs>
        <clipPath id={clipId}>{children}</clipPath>

        <linearGradient id={gradientId}>
          <stop
            offset="0%"
            stopColor={backgroundColor}
            stopOpacity={backgroundOpacity}
          >
            {animate && (
              <animate
                id={animateId}
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
            {animate && (
              <animate
                attributeName="stop-color"
                values={`${backgroundColor}; ${foregroundColor}; ${backgroundColor}`}
                begin={`${animateId}.begin+0.25s`}
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
            {animate && (
              <animate
                attributeName="stop-color"
                begin={`${animateId}.begin+0.5s`}
                values={`${backgroundColor}; ${foregroundColor}; ${backgroundColor}`}
                dur={`${speed}s`}
                repeatCount="indefinite"
              />
            )}
          </stop>
        </linearGradient>
      </defs>
    </svg>
  );
}
