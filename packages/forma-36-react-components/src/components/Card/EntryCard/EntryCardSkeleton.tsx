import React from 'react';
import SkeletonContainer from '../../Skeleton/SkeletonContainer';
import SkeletonDisplayText from '../../Skeleton/SkeletonDisplayText';
import SkeletonBodyText from '../../Skeleton/SkeletonBodyText';

const EntryCardSkeleton = () => (
  <SkeletonContainer width="100%" clipId="f36-entry-card-skeleton">
    <SkeletonDisplayText numberOfLines={1} offsetTop={2.5} />
    <SkeletonBodyText numberOfLines={3} offsetTop={37.5} />
  </SkeletonContainer>
);

export default EntryCardSkeleton;
