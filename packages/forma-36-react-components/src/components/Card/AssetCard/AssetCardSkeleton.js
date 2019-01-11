import React from 'react';
import SkeletonContainer from '../../Skeleton/SkeletonContainer';
import SkeletonBodyText from '../../Skeleton/SkeletonBodyText';
import SkeletonImage from '../../Skeleton/SkeletonImage';

const AssetCardSkeleton = () => (
  <SkeletonContainer width="100%" svgWidth={240}>
    <SkeletonImage offsetLeft={85} offsetTop={100} />
    <SkeletonBodyText
      offsetLeft={70}
      offsetTop={190}
      numberOfLines={1}
      width={100}
    />
  </SkeletonContainer>
);

export default AssetCardSkeleton;
