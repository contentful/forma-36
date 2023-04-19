import React from 'react';
import { cx } from 'emotion';
import { getNavbarMenuItemStyles } from './NavbarMenuItem.styles';
import { Menu, type MenuItemProps } from '@contentful/f36-menu';
import {
  NavbarItemIcon,
  type NavbarItemIconProps,
} from '../NavbarItemIcon/NavbarItemIcon';
import { ExternalLinkIcon } from '@contentful/f36-icons';
import type {
  ExpandProps,
  PolymorphicComponent,
  PolymorphicProps,
} from '@contentful/f36-core';

const NAVBAR_MENU_ITEM_DEFAULT_TAG = 'button';

type NavbarMenuItemOwnProps = {
  children?: null;
  title: string;
  icon?: NavbarItemIconProps['icon'];
  as?: React.ElementType;
} & Omit<MenuItemProps, 'children' | 'as'>;

export type NavbarMenuItemProps<
  E extends React.ElementType = typeof NAVBAR_MENU_ITEM_DEFAULT_TAG,
> = PolymorphicProps<NavbarMenuItemOwnProps, E>;

function _NavbarMenuItem(
  props: NavbarMenuItemProps<React.ElementType>,
  ref: React.Ref<any>,
) {
  const {
    as: Comp = NAVBAR_MENU_ITEM_DEFAULT_TAG,
    icon,
    title,
    className,
    ...otherProps
  } = props;
  const styles = getNavbarMenuItemStyles();

  const itemIsExternalLink = isExternalLink(
    props as unknown as NavbarMenuItemProps<'a'>,
  );

  return (
    <Menu.Item
      {...otherProps}
      ref={ref}
      as={Comp as MenuItemProps['as']}
      className={cx(styles.root, className)}
    >
      {icon ? (
        <NavbarItemIcon icon={icon} variant="secondary" />
      ) : (
        itemIsExternalLink && externalIcon
      )}
      <span>{title}</span>
      {icon && itemIsExternalLink ? externalIcon : null}
    </Menu.Item>
  );
}

const externalIcon = (
  <NavbarItemIcon icon={<ExternalLinkIcon />} variant="muted" />
);

const isExternalLink = (props: NavbarMenuItemProps<'a'>) =>
  props.as === 'a' && props.target === '_blank';

export const NavbarMenuItem: PolymorphicComponent<
  ExpandProps<NavbarMenuItemOwnProps>,
  typeof NAVBAR_MENU_ITEM_DEFAULT_TAG
> = React.forwardRef(_NavbarMenuItem);
