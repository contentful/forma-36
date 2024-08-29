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
    svgHeight={18}
    backgroundColor={tokens.gray300}
    foregroundColor={tokens.gray200}
  >
    <SkeletonDisplayText
      lineHeight={18}
      numberOfLines={1}
      radiusX={9}
      radiusY={9}
    />
  </SkeletonContainer>
);
