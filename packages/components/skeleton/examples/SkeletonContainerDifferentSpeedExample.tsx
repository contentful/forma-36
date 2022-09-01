import React from 'react';
import { Skeleton } from '@contentful/f36-components';

export default function SkeletonContainerDifferentSpeedExample() {
  return (
    <Skeleton.Container backgroundColor="blue" speed={1}>
      <Skeleton.BodyText numberOfLines={4} />
    </Skeleton.Container>
  );
}
