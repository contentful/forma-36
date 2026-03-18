import { css, cx } from '@emotion/css';
import tokens from '@contentful/f36-tokens';
import type { NavListItemProps } from './NavListItem';
import { getMenuItemStyles } from '@contentful/f36-core';

export const getNavListItemStyles = ({
  isActive,
  isDisabled,
}: {
  isActive: NavListItemProps['isActive'];
  isDisabled: NavListItemProps['isDisabled'];
}) => {
  return {
    root: cx(
      getMenuItemStyles({ isActive, isDisabled }),
      css({
        gap: tokens.spacingXs,
      }),
    ),
  };
};
