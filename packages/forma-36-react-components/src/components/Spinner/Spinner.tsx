import React from 'react';
import cn from 'classnames';

import styles from './Spinner.css';

export interface SpinnerProps {
  className?: string;
  color?: 'default' | 'primary' | 'white';
  customSize?: number;
  size?: 'default' | 'small' | 'large';
  testId?: string;
}

const defaultProps: Partial<SpinnerProps> = {
  testId: 'cf-ui-spinner',
  size: 'default',
  color: 'default',
};

export const Spinner = ({
  className,
  color,
  customSize,
  size,
  testId,
  ...otherProps
}: SpinnerProps) => {
  const classNames = cn(styles.Spinner, className, {
    [styles[`Spinner--${size}`]]: size,
    [styles[`Spinner--${color}`]]: color,
  });

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 60 51"
      className={classNames}
      style={
        customSize
          ? { height: `${customSize}px`, width: `${customSize}px` }
          : {}
      }
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
};
Spinner.defaultProps = defaultProps;

export default Spinner;
