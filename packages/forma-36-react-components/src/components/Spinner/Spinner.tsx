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
      viewBox="0 0 20 20"
      className={classNames}
      style={
        customSize
          ? { height: `${customSize}px`, width: `${customSize}px` }
          : {}
      }
      data-test-id={testId}
      {...otherProps}
    >
      <title>Loading…</title>
      <path d="M2,10a8,8,0,0,1,8-8V0a10,10,0,0,0,0,20V18A8,8,0,0,1,2,10Z" />
      <path
        d="M10,0V2a8,8,0,0,1,0,16v2A10,10,0,0,0,10,0Z"
        style={{ opacity: 0.4 }}
      />
    </svg>
  );
}

export default Spinner;
