import { NavList as OriginalNavList } from './NavList/NavList';
import { NavListItem } from './NavListItem/NavListItem';

type CompoundNavList = typeof OriginalNavList & {
  Item: typeof NavListItem;
};

export const NavList = OriginalNavList as CompoundNavList;
NavList.Item = NavListItem;
