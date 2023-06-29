import React from 'react';
import { SkeletonContainer, SkeletonImage } from '@contentful/f36-skeleton';
import tokens from '@contentful/f36-tokens';

export function NavbarAccountSkeleton({ ariaLabel }: { ariaLabel?: string }) {
  return (
    <SkeletonContainer
      svgWidth={24}
      svgHeight={24}
      ariaLabel={ariaLabel}
      backgroundColor={tokens.gray800}
      foregroundColor={tokens.gray700}
    >
      <SkeletonImage width={24} height={24} radiusX={12} radiusY={12} />
    </SkeletonContainer>
  );
}
