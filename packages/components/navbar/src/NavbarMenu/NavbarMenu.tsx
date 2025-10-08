import React from 'react';
import { Menu, type MenuListProps, type MenuProps } from '@contentful/f36-menu';
import { getNavbarMenuStyles } from './NavbarMenu.styles';

export type NavbarMenuProps = {
  trigger: React.ReactNode;
  children?: React.ReactNode;
} & Pick<MenuListProps, 'testId'> &
  Pick<MenuProps, 'onOpen' | 'onClose'>;

export const NavbarMenu = (props: NavbarMenuProps) => {
  const {
    trigger,
    children,
    testId = 'cf-ui-navbar-menu-list',
    onOpen,
    onClose,
  } = props;
  const styles = getNavbarMenuStyles();

  return (
    <Menu onOpen={onOpen} onClose={onClose}>
      <Menu.Trigger>{trigger}</Menu.Trigger>
      <Menu.List className={styles.menuList} testId={testId}>
        {children}
      </Menu.List>
    </Menu>
  );
};
