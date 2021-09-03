import { Menu as OriginalMenu } from './Menu';
import { MenuList } from './MenuList/MenuList';
import { MenuListItem } from './MenuListItem/MenuListItem';
import { MenuTrigger } from './MenuTrigger/MenuTrigger';

type CompoundMenu = typeof OriginalMenu & {
  List: typeof MenuList;
  ListItem: typeof MenuListItem;
  Trigger: typeof MenuTrigger;
};

export const Menu = OriginalMenu as CompoundMenu;
Menu.List = MenuList;
Menu.ListItem = MenuListItem;
Menu.Trigger = MenuTrigger;
