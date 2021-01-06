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
  testId = 'cf-ui-skeleton-image',
  offsetLeft,
  offsetTop,
  width = 70,
  height = 70,
  radiusX = 0,
  radiusY = 0,
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
      data-test-id={testId}
      {...otherProps}
    />
  );
}

export default SkeletonImage;
