import React from 'react';
import { Skeleton } from '@contentful/f36-components';

export default function SkeletonImageRoundExample() {
  return (
    <Skeleton.Container>
      <Skeleton.Image radiusX={100} radiusY={100} />
    </Skeleton.Container>
  );
}
