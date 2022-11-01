import React from 'react';

import { Skeleton } from '../index';
import type { SkeletonTextProps } from '../SkeletonText/SkeletonText';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface SkeletonBodyTextProps extends SkeletonTextProps {}

export const SkeletonBodyText = ({
  lineHeight = 16,
  marginBottom = 8,
  numberOfLines = 2,
  offsetLeft = 0,
  offsetTop = 0,
  ...otherProps
}: SkeletonBodyTextProps) => {
  return (
    <Skeleton.Text
      lineHeight={lineHeight}
      marginBottom={marginBottom}
      numberOfLines={
        numberOfLines! > 0 // eslint-disable-line @typescript-eslint/no-non-null-assertion
          ? numberOfLines
          : 1
      }
      offsetLeft={offsetLeft}
      offsetTop={offsetTop}
      {...otherProps}
    />
  );
};
