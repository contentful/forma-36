import React, { Component } from 'react';

type stringOrNumber = string | number;

export type SkeletonImageProps = {
  width: stringOrNumber;
  height: stringOrNumber;
  radiusX: stringOrNumber;
  radiusY: stringOrNumber;
  offsetLeft?: stringOrNumber;
  offsetTop?: stringOrNumber;
  testId?: string;
} & typeof defaultProps;

const defaultProps = {
  testId: 'cf-ui-skeleton-image',
  width: 70,
  height: 70,
  radiusX: 0,
  radiusY: 0,
};

export class SkeletonImage extends Component<SkeletonImageProps> {
  static defaultProps = defaultProps;

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
