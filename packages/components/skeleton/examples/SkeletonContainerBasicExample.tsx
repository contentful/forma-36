import React from 'react';
import { Skeleton } from '@contentful/f36-components';

export default function SkeletonContainerBasicExample() {
  return (
    <Skeleton.Container>
      <Skeleton.BodyText numberOfLines={4} />
    </Skeleton.Container>
  );
}
