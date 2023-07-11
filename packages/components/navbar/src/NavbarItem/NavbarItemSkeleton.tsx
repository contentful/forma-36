import React from 'react';
import { SkeletonContainer, SkeletonText } from '@contentful/f36-skeleton';
import tokens from '@contentful/f36-tokens';
import { getNavbarItemSkeletonStyles } from './NavbarItem.styles';

export const NavbarItemSkeleton = ({
  estimatedWidth,
}: {
  estimatedWidth: number;
}) => {
  const styles = getNavbarItemSkeletonStyles();

  return (
    <SkeletonContainer
      className={styles.root}
      svgWidth={estimatedWidth}
      svgHeight={40}
      backgroundColor={tokens.gray800}
      foregroundColor={tokens.gray700}
    >
      <SkeletonText
        lineHeight={6}
        numberOfLines={1}
        offsetTop={7}
        radiusX={tokens.borderRadiusSmall}
        radiusY={tokens.borderRadiusSmall}
      />
    </SkeletonContainer>
  );
};
