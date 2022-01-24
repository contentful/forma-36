import React from 'react';
import { SkeletonContainer, SkeletonImage } from '@contentful/f36-components';

export default function SkeletonImageRoundExample() {
  return (
    <SkeletonContainer>
      <SkeletonImage radiusX={100} radiusY={100} />
    </SkeletonContainer>
  );
}
