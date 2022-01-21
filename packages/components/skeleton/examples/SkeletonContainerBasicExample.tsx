import React from 'react';
import {
  SkeletonContainer,
  SkeletonBodyText,
} from '@contentful/f36-components';

export default function SkeletonContainerBasicExample() {
  return (
    <SkeletonContainer>
      <SkeletonBodyText numberOfLines={4} />
    </SkeletonContainer>
  );
}
