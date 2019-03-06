import React, { Component } from 'react';

interface SkeletonImageProps {
  testId: string;
  offsetLeft: number;
  offsetTop: number;
  width: number;
  height: number;
  radiusX: number;
  radiusY: number;
}

export class SkeletonImage extends Component<SkeletonImageProps> {
  static defaultProps = {
    testId: 'cf-ui-skeleton-image',
    offsetLeft: undefined,
    offsetTop: undefined,
    width: 70,
    height: 70,
    radiusX: 0,
    radiusY: 0,
  };

  render() {
    const {
      testId,
      offsetLeft,
      offsetTop,
      width,
      height,
      radiusX,
      radiusY,
      ...otherProps
    } = this.props;

    return (
      <rect
        x={offsetLeft}
        y={offsetTop}
        rx={radiusX}
        ry={radiusY}
        width={width}
        height={height}
        {...otherProps}
      />
    );
  }
}

export default SkeletonImage;
