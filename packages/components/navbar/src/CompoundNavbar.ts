import { MenuDivider } from '@contentful/f36-menu';
import { MenuSectionTitle } from '@contentful/f36-menu';
import { Navbar as OriginalNavbar } from './Navbar';

import { NavbarAccount, NavbarAccountSkeleton } from './NavbarAccount';
import { NavbarItem, NavbarItemSkeleton } from './NavbarItem';
import { NavbarMenuItem, NavbarMenuItemSkeleton } from './NavbarMenuItem';
import { NavbarSwitcher, NavbarSwitcherSkeleton } from './NavbarSwitcher';

import { NavbarSwitcherItem } from './NavbarSwitcherItem/NavbarSwitcherItem';
import { NavbarBadge } from './NavbarBadge/NavbarBadge';
import { NavbarTopbarItem } from './NavbarTopbarItem/NavbarTopbarItem';

type CompoundNavbar = typeof OriginalNavbar & {
  Item: typeof NavbarItem;
  ItemSkeleton: typeof NavbarItemSkeleton;
  MenuItem: typeof NavbarMenuItem;
  MenuItemSkeleton: typeof NavbarMenuItemSkeleton;
  MenuDivider: typeof MenuDivider;
  MenuSectionTitle: typeof MenuSectionTitle;
  Switcher: typeof NavbarSwitcher;
  SwitcherSkeleton: typeof NavbarSwitcherSkeleton;
  SwitcherItem: typeof NavbarSwitcherItem;
  Account: typeof NavbarAccount;
  AccountSkeleton: typeof NavbarAccountSkeleton;
  Badge: typeof NavbarBadge;
  TopbarItem: typeof NavbarTopbarItem;
};

export const Navbar = OriginalNavbar as CompoundNavbar;
Navbar.Item = NavbarItem;
Navbar.ItemSkeleton = NavbarItemSkeleton;
Navbar.MenuItem = NavbarMenuItem;
Navbar.MenuItemSkeleton = NavbarMenuItemSkeleton;
Navbar.MenuDivider = MenuDivider;
Navbar.MenuSectionTitle = MenuSectionTitle;
Navbar.Switcher = NavbarSwitcher;
Navbar.SwitcherSkeleton = NavbarSwitcherSkeleton;
Navbar.SwitcherItem = NavbarSwitcherItem;
Navbar.Account = NavbarAccount;
Navbar.AccountSkeleton = NavbarAccountSkeleton;
Navbar.Badge = NavbarBadge;
Navbar.TopbarItem = NavbarTopbarItem;
