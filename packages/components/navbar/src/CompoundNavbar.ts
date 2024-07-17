import { MenuDivider } from '@contentful/f36-menu';
import { MenuSectionTitle } from '@contentful/f36-menu';
import { Navbar as OriginalNavbar } from './Navbar';

import { NavbarAccount, NavbarAccountSkeleton } from './NavbarAccount';
import { NavbarItem, NavbarItemSkeleton } from './NavbarItem';
import { NavbarMenuItem, NavbarMenuItemSkeleton } from './NavbarMenuItem';
import { NavbarSwitcher, NavbarSwitcherSkeleton } from './NavbarSwitcher';
import { NavbarBadge } from './NavbarBadge/NavbarBadge';
import { NavbarSubmenu } from './NavbarSubmenu/NavbarSubmenu';

type CompoundNavbar = typeof OriginalNavbar & {
  Item: typeof NavbarItem;
  ItemSkeleton: typeof NavbarItemSkeleton;
  MenuItem: typeof NavbarMenuItem;
  MenuItemSkeleton: typeof NavbarMenuItemSkeleton;
  MenuDivider: typeof MenuDivider;
  MenuSectionTitle: typeof MenuSectionTitle;
  Submenu: typeof NavbarSubmenu;
  Switcher: typeof NavbarSwitcher;
  SwitcherSkeleton: typeof NavbarSwitcherSkeleton;
  Account: typeof NavbarAccount;
  AccountSkeleton: typeof NavbarAccountSkeleton;
  Badge: typeof NavbarBadge;
};

export const Navbar = OriginalNavbar as CompoundNavbar;
Navbar.Item = NavbarItem;
Navbar.ItemSkeleton = NavbarItemSkeleton;
Navbar.MenuItem = NavbarMenuItem;
Navbar.MenuItemSkeleton = NavbarMenuItemSkeleton;
Navbar.MenuDivider = MenuDivider;
Navbar.MenuSectionTitle = MenuSectionTitle;
Navbar.Submenu = NavbarSubmenu;
Navbar.Switcher = NavbarSwitcher;
Navbar.SwitcherSkeleton = NavbarSwitcherSkeleton;
Navbar.Account = NavbarAccount;
Navbar.AccountSkeleton = NavbarAccountSkeleton;
Navbar.Badge = NavbarBadge;
