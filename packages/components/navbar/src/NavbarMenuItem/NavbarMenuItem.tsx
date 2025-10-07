import React from 'react';
import { cx } from '@emotion/css';
import { getNavbarMenuItemStyles } from './NavbarMenuItem.styles';
import { Menu, type MenuItemProps } from '@contentful/f36-menu';
import {
  NavbarItemIcon,
  type NavbarItemIconProps,
} from '../NavbarItemIcon/NavbarItemIcon';
import { ArrowSquareOutIcon } from '@contentful/f36-icons';
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

function NavbarMenuItemBase(
  props: NavbarMenuItemProps<React.ElementType>,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
      className={cx(styles.navbarMenuItem, className)}
    >
      {icon ? (
        <NavbarItemIcon icon={icon} />
      ) : (
        itemIsExternalLink && externalIcon
      )}
      <span>{title}</span>
      {icon && itemIsExternalLink ? externalIcon : null}
    </Menu.Item>
  );
}

const externalIcon = <NavbarItemIcon icon={<ArrowSquareOutIcon />} />;

const isExternalLink = (props: NavbarMenuItemProps<'a'>) =>
  props.as === 'a' && props.target === '_blank';

export const NavbarMenuItem = React.forwardRef(
  NavbarMenuItemBase,
) as PolymorphicComponent<
  ExpandProps<NavbarMenuItemOwnProps>,
  typeof NAVBAR_MENU_ITEM_DEFAULT_TAG
>;
