import React from 'react';
import { Skeleton } from '@contentful/f36-components';

export default function SkeletonDisplayTextCompositionExample() {
  return (
    <Skeleton.Container>
      <Skeleton.DisplayText />
      <Skeleton.BodyText offsetTop={37} numberOfLines={5} />
      {/**
       * The offsetTop value is the height of the DisplayText
       * plus 16px (gap between the two skeletons)
       */}
    </Skeleton.Container>
  );
}
