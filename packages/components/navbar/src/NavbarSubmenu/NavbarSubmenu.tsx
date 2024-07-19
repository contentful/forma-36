import React from 'react';
import { Menu, type MenuListProps, type MenuProps } from '@contentful/f36-menu';
import { getNavbarSubmenuStyles } from './NavbarMenu.styles';
import {
  NavbarItemIcon,
  type NavbarItemIconProps,
} from '../NavbarItemIcon/NavbarItemIcon';
import { Flex } from '@contentful/f36-core';

export type NavbarSubmenuProps = {
  title: string;
  icon?: NavbarItemIconProps['icon'];
  children?: React.ReactNode;
} & Pick<MenuListProps, 'testId'> &
  Pick<MenuProps, 'onOpen' | 'onClose'>;

export const NavbarSubmenu = (props: NavbarSubmenuProps) => {
  const {
    title,
    icon,
    children,
    testId = 'cf-ui-navbar-submenu-list',
    onOpen,
    onClose,
  } = props;
  const styles = getNavbarSubmenuStyles();

  return (
    <Menu.Submenu onOpen={onOpen} onClose={onClose}>
      <Menu.SubmenuTrigger>
        <Flex className={styles.navbarMenuItem}>
          {icon && <NavbarItemIcon icon={icon} />}
          <span>{title}</span>
        </Flex>
      </Menu.SubmenuTrigger>
      <Menu.List className={styles.menuList} testId={testId}>
        {children}
      </Menu.List>
    </Menu.Submenu>
  );
};
