import { Menu as OriginalMenu } from './Menu';
import { MenuList } from './MenuList/MenuList';
import { MenuItem } from './MenuItem/MenuItem';
import { MenuTrigger } from './MenuTrigger/MenuTrigger';

type CompoundMenu = typeof OriginalMenu & {
  List: typeof MenuList;
  Item: typeof MenuItem;
  Trigger: typeof MenuTrigger;
};

export const Menu = OriginalMenu as CompoundMenu;
Menu.List = MenuList;
Menu.Item = MenuItem;
Menu.Trigger = MenuTrigger;
