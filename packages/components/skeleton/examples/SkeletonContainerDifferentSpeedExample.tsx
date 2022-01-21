import React from 'react';
import {
  SkeletonContainer,
  SkeletonBodyText,
} from '@contentful/f36-components';

export default function SkeletonContainerDifferentSpeedExample() {
  return (
    <SkeletonContainer backgroundColor="blue" speed={1}>
      <SkeletonBodyText numberOfLines={4} />
    </SkeletonContainer>
  );
}
