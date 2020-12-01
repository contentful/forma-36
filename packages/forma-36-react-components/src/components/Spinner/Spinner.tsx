import React from 'react';
import cn from 'classnames';

import styles from './Spinner.css';

export interface SpinnerProps {
  /**
   * Class names to be appended to the className prop of the component
   */
  className?: string;
  /**
   * The color that will be used in the `fill` property of the SVG
   */
  color?: 'default' | 'primary' | 'white';
  /**
   * Allows resizing the spinner with any N value. The final size will be NxN pixels
   */
  customSize?: number;
  /**
   * Controls the size of the spinner. The `default` size is 20px wide, the `small` size is 14px wide, and the `large` size is 36px wide
   */
  size?: 'default' | 'small' | 'large';
  /**
   * An ID used for testing purposes applied as a data attribute (data-test-id)
   */
  testId?: string;
}

export function Spinner({
  className,
  color = 'default',
  customSize,
  size = 'default',
  testId = 'cf-ui-spinner',
  ...otherProps
}: SpinnerProps): React.ReactElement {
  const classNames = cn(styles.Spinner, className, {
    [styles[`Spinner--${size}`]]: size,
    [styles[`Spinner--${color}`]]: color,
  });

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 60 51"
      className={classNames}
      style={
        customSize
          ? { height: `${customSize}px`, width: `${customSize}px` }
          : {}
      }
      data-test-id={testId}
      {...otherProps}
    >
      <g
        className={styles['circle1--translate']}
        transform="translate(10,33.528168)"
      >
        <g className={styles['circle1--scale']}>
          <circle id="circle1" r="6" transform="translate(0,10.471832)" />
        </g>
      </g>

      <g
        className={styles['circle2--translate']}
        transform="translate(30,33.528168)"
      >
        <g className={styles['circle2--scale']}>
          <circle id="circle2" r="6" transform="translate(0,10.471832)" />
        </g>
      </g>

      <g
        className={styles['circle3--translate']}
        transform="translate(50,33.528168)"
      >
        <g className={styles['circle3--scale']}>
          <circle id="circle3" r="6" transform="translate(0,10.471832)" />
        </g>
      </g>
    </svg>
  );
}

export default Spinner;
