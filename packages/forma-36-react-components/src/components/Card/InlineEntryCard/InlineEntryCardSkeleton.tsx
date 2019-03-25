import React from 'react';
import SkeletonContainer from '../../Skeleton/SkeletonContainer';
import SkeletonBodyText from '../../Skeleton/SkeletonBodyText';

const EntryCardSkeleton = () => (
  <SkeletonContainer
    width="100%"
    clipId="f36-inline-entry-card-skeleton"
    svgHeight={16}
  >
    <SkeletonBodyText numberOfLines={1} />
  </SkeletonContainer>
);

export default EntryCardSkeleton;
