import { css, cx } from '@emotion/css';
import { getMenuItemStyles as globalGetMenuItemStyles } from '@contentful/f36-core';
import type { MenuItemProps } from './MenuItem';
import tokens from '@contentful/f36-tokens';

export const getMenuItemStyles = ({
  isActive,
  isDisabled,
}: {
  isActive: MenuItemProps['isActive'];
  isDisabled: MenuItemProps['isDisabled'];
}) =>
  cx(
    globalGetMenuItemStyles({ isActive, isDisabled }),
    css({
      width: `calc(100% - 2 * ${tokens.spacing2Xs})`,
      margin: `0 ${tokens.spacing2Xs}`,
      gap: tokens.spacingXs,
    }),
  );
