import React from 'react';

type stringOrNumber = string | number;

export interface SkeletonImageProps {
  width?: stringOrNumber;
  height?: stringOrNumber;
  radiusX?: stringOrNumber;
  radiusY?: stringOrNumber;
  offsetLeft?: stringOrNumber;
  offsetTop?: stringOrNumber;
  testId?: string;
}

export function SkeletonImage({
  testId,
  offsetLeft,
  offsetTop,
  width,
  height,
  radiusX,
  radiusY,
  ...otherProps
}: SkeletonImageProps): React.ReactElement {
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

SkeletonImage.defaultProps = {
  testId: 'cf-ui-skeleton-image',
  width: 70,
  height: 70,
  radiusX: 0,
  radiusY: 0,
};

export default SkeletonImage;
