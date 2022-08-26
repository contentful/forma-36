import React from 'react';
import { Skeleton } from '@contentful/f36-components';

export default function SkeletonContainerDifferentSpeedExample() {
  return (
    <Skeleton.Container>
      <Skeleton.DisplayText />
    </Skeleton.Container>
  );
}
