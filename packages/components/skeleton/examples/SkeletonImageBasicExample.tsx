import React from 'react';
import { SkeletonContainer, SkeletonImage } from '@contentful/f36-components';

export default function SkeletonImageBasicExample() {
  return (
    <SkeletonContainer>
      <SkeletonImage />
    </SkeletonContainer>
  );
}
