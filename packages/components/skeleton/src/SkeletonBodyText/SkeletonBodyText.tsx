import React from 'react';

import {
  SkeletonText,
  type SkeletonTextProps,
} from '../SkeletonText/SkeletonText';

export const SkeletonBodyText = ({
  lineHeight = 16,
  marginBottom = 8,
  numberOfLines = 2,
  offsetLeft = 0,
  offsetTop = 0,
  ...otherProps
}: SkeletonTextProps) => {
  return (
    <SkeletonText
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

SkeletonBodyText.displayName = 'SkeletonBodyText';
