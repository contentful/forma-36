import React from 'react';
import {
  SkeletonBodyText,
  SkeletonContainer,
  SkeletonDisplayText,
} from '../../Skeleton';

export const EntryCardSkeleton = () => (
  <SkeletonContainer width="100%">
    <SkeletonDisplayText numberOfLines={1} offsetTop={2.5} />
    <SkeletonBodyText numberOfLines={3} offsetTop={37.5} />
  </SkeletonContainer>
);
