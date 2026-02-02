import React from 'react';

import { Skeleton } from '../index';
import type { SkeletonTextProps } from '../SkeletonText/SkeletonText';

export const SkeletonDisplayText = ({
  lineHeight = 21,
  marginBottom = 20,
  numberOfLines = 1,
  offsetLeft = 0,
  offsetTop = 0,
  width = 100,
  ...otherProps
}: SkeletonTextProps): React.ReactElement => {
  return (
    <Skeleton.Text
      lineHeight={lineHeight}
      marginBottom={marginBottom}
      numberOfLines={numberOfLines}
      offsetLeft={offsetLeft}
      offsetTop={offsetTop}
      width={width}
      {...otherProps}
    />
  );
};

SkeletonDisplayText.displayName = 'SkeletonDisplayText';
