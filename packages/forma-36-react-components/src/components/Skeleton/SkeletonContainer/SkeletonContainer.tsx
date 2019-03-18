import React, { Component } from 'react';
import cn from 'classnames';
import styles from './SkeletonContainer.css';

export type SkeletonContainerProps = {
  width?: number | string;
  height?: number | string;
  preserveAspectRatio?: string;
  clipId?: string;
  gradientId?: string;
  backgroundColor?: string;
  backgroundOpacity?: number;
  animate?: boolean;
  speed?: number | string;
  foregroundColor?: string;
  foregroundOpacity?: number;
  svgWidth?: string | number;
  svgHeight?: string | number;

  ariaLabel?: string;
  extraClassNames?: string;
  testId?: string;
  children: React.ReactNode;
} & typeof defaultProps;

const defaultProps = {
  testId: 'cf-ui-skeleton-form',
  ariaLabel: 'Loading component...',
  width: '100%',
  height: '100%',
  preserveAspectRatio: 'xMidYMid meet',
  clipId: 'cf-ui-skeleton-clip-id',
  gradientId: 'cf-ui-skeleton-clip-gradient',
  backgroundColor: '#e5ebed',
  backgroundOpacity: 1,
  animate: true,
  speed: 2,
  foregroundColor: '#f7f9fa',
  foregroundOpacity: 1,
  svgWidth: '100%' as string | number,
  svgHeight: '100%' as string | number,
};

export class SkeletonContainer extends Component<SkeletonContainerProps> {
  static defaultProps = defaultProps;

  render() {
    const {
      extraClassNames,
      children,
      testId,
      ariaLabel,
      width,
      height,
      preserveAspectRatio,
      clipId,
      gradientId,
      backgroundColor,
      backgroundOpacity,
      animate,
      speed,
      foregroundColor,
      foregroundOpacity,
      svgWidth,
      svgHeight,
      ...otherProps
    } = this.props;

    const classNames = cn(styles['SkeletonContainer'], extraClassNames);

    return (
      <svg
        role="img"
        className={classNames}
        aria-label={ariaLabel}
        preserveAspectRatio={preserveAspectRatio}
        width={svgWidth}
        height={svgHeight}
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
                  id="animation1"
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
                  begin="animation1.begin+0.25s"
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
                  begin="animation1.begin+0.5s"
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
}

export default SkeletonContainer;
