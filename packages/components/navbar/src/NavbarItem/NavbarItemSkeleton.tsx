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
      className={styles.itemSkeleton}
      svgWidth={estimatedWidth}
      svgHeight={32}
      backgroundColor={tokens.gray300}
      foregroundColor={tokens.gray200}
    >
      <SkeletonText
        lineHeight={6}
        numberOfLines={1}
        offsetTop={10}
        radiusX={tokens.borderRadiusSmall}
        radiusY={tokens.borderRadiusSmall}
      />
    </SkeletonContainer>
  );
};
