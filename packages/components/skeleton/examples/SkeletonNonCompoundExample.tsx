import React from 'react';
import {
  SkeletonBodyText,
  SkeletonContainer,
  SkeletonDisplayText,
} from '@contentful/f36-components';

export default function SkeletonImageDimensionsExample() {
  return (
    <SkeletonContainer>
      <SkeletonDisplayText />
      <SkeletonBodyText offsetTop={37} numberOfLines={5} />
      {/**
       * The offsetTop value is the height of the DisplayText
       * plus 16px (gap between the two skeletons)
       */}
    </SkeletonContainer>
  );
}
