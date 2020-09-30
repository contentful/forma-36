import React, { Component } from 'react';
import cn from 'classnames';

import styles from './Spinner.css';

type SpinnerSize = 'default' | 'small' | 'large';

type SpinnerColor = 'default' | 'white';

export interface SpinnerProps {
  size?: SpinnerSize;
  customSize?: number;
  color?: SpinnerColor;
  className?: string;
  testId?: string;
}

const defaultProps: Partial<SpinnerProps> = {
  testId: 'cf-ui-spinner',
  size: 'default',
  color: 'default',
};

export class Spinner extends Component<SpinnerProps> {
  static defaultProps = defaultProps;

  render() {
    const {
      className,
      size,
      testId,
      color,
      customSize,
      ...otherProps
    } = this.props;

    const classNames = cn(styles.Spinner, className, {
      [styles[`Spinner--${size}`]]: size,
      [styles[`Spinner--${color}`]]: color,
    });

    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        data-test-id={testId}
        className={classNames}
        style={
          customSize
            ? { height: `${customSize}px`, width: `${customSize}px` }
            : {}
        }
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
}

export default Spinner;
