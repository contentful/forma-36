import React from 'react';

import {
  SkeletonBodyText,
  SkeletonContainer,
  SkeletonImage,
} from '../../Skeleton';

export interface AssetCardSkeletonProps {
  size?: 'small' | 'default';
}

export const AssetCardSkeleton = (props: AssetCardSkeletonProps) => (
  <SkeletonContainer svgWidth={props.size === 'small' ? 150 : 240}>
    <SkeletonImage
      offsetLeft={props.size === 'small' ? 40 : 85}
      offsetTop={props.size === 'small' ? 50 : 100}
    />
    <SkeletonBodyText
      offsetLeft={props.size === 'small' ? 25 : 70}
      offsetTop={props.size === 'small' ? 140 : 190}
      numberOfLines={1}
      width={100}
    />
  </SkeletonContainer>
);
