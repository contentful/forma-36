import { Menu as OriginalMenu } from './Menu';
import { MenuList } from './MenuList/MenuList';
import { MenuItem } from './MenuItem/MenuItem';
import { MenuTrigger } from './MenuTrigger/MenuTrigger';
import { MenuDivider } from './MenuDivider/MenuDivider';
import { MenuSectionTitle } from './MenuSectionTitle/MenuSectionTitle';

type CompoundMenu = typeof OriginalMenu & {
  List: typeof MenuList;
  Item: typeof MenuItem;
  Trigger: typeof MenuTrigger;
  Divider: typeof MenuDivider;
  SectionTitle: typeof MenuSectionTitle;
};

export const Menu = OriginalMenu as CompoundMenu;
Menu.List = MenuList;
Menu.Item = MenuItem;
Menu.Trigger = MenuTrigger;
Menu.Divider = MenuDivider;
Menu.SectionTitle = MenuSectionTitle;
