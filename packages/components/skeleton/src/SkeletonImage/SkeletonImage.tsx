import tokens from '@contentful/f36-tokens';
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

export const SkeletonImage = ({
  testId = 'cf-ui-skeleton-image',
  offsetLeft,
  offsetTop,
  width = 70,
  height = 70,
  radiusX = tokens.borderRadiusSmall,
  radiusY = tokens.borderRadiusSmall,
  ...otherProps
}: SkeletonImageProps): React.ReactElement => {
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
};

SkeletonImage.displayName = 'SkeletonImage';
