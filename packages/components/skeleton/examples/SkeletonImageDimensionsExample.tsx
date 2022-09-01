import React from 'react';
import { Skeleton } from '@contentful/f36-components';

export default function SkeletonImageDimensionsExample() {
  return (
    <Skeleton.Container>
      <Skeleton.Image />
      <Skeleton.Image width={100} height={35} offsetTop={78} />
      {/**
       * The offsetTop value is the height of the first SkeletonImage
       * plus 8px (gap between the two skeletons)
       */}
    </Skeleton.Container>
  );
}
