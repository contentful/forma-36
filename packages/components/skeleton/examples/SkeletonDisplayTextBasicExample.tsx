import React from 'react';
import {
  SkeletonContainer,
  SkeletonDisplayText,
} from '@contentful/f36-components';

export default function SkeletonContainerDifferentSpeedExample() {
  return (
    <SkeletonContainer>
      <SkeletonDisplayText />
    </SkeletonContainer>
  );
}
