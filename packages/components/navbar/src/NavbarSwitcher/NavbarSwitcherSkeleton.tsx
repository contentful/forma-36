import React from 'react';
import {
  SkeletonContainer,
  SkeletonDisplayText,
} from '@contentful/f36-skeleton';
import tokens from '@contentful/f36-tokens';

export const NavbarSwitcherSkeleton = ({
  estimatedWidth,
}: {
  estimatedWidth: number;
}) => (
  <SkeletonContainer
    svgWidth={estimatedWidth}
    svgHeight={24}
    backgroundColor={tokens.gray300}
    foregroundColor={tokens.gray200}
  >
    <SkeletonDisplayText
      lineHeight={24}
      numberOfLines={1}
      radiusX={12}
      radiusY={12}
    />
  </SkeletonContainer>
);
