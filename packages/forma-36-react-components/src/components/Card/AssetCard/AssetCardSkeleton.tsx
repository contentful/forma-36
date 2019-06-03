import React from 'react';
import SkeletonContainer from '../../Skeleton/SkeletonContainer';
import SkeletonBodyText from '../../Skeleton/SkeletonBodyText';
import SkeletonImage from '../../Skeleton/SkeletonImage';

export interface AssetCardSkeletonProps {
  size?: 'small' | 'default';
}

const AssetCardSkeleton = (props: AssetCardSkeletonProps) => (
  <SkeletonContainer
    svgWidth={props.size === 'small' ? 150 : 240}
    clipId="f36-asset-card-skeleton"
  >
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

export default AssetCardSkeleton;
