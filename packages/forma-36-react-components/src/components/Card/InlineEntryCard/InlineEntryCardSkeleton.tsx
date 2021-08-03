import React from 'react';

import { SkeletonBodyText, SkeletonContainer } from '@contentful/f36-skeleton';

export const InlineEntryCardSkeleton = () => (
  <SkeletonContainer
    width="100%"
    clipId="f36-inline-entry-card-skeleton"
    svgHeight={16}
  >
    <SkeletonBodyText numberOfLines={1} />
  </SkeletonContainer>
);
