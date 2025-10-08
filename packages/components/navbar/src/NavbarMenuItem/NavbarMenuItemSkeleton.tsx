import React from 'react';
import { Menu } from '@contentful/f36-menu';
import {
  SkeletonBodyText,
  SkeletonContainer,
  SkeletonImage,
} from '@contentful/f36-skeleton';
import { Flex } from '@contentful/f36-core';

import tokens from '@contentful/f36-tokens';

export const NavbarMenuItemSkeleton = ({
  ariaLabel,
}: {
  ariaLabel?: string;
}) => (
  <Menu.Item>
    <Flex alignItems="center" gap={tokens.spacingXs}>
      <SkeletonContainer svgHeight={16} svgWidth={18}>
        <SkeletonImage width={16} height={16} />
      </SkeletonContainer>
      <SkeletonContainer svgHeight={16} svgWidth={190} ariaLabel={ariaLabel}>
        <SkeletonBodyText numberOfLines={1} />
      </SkeletonContainer>
    </Flex>
  </Menu.Item>
);
