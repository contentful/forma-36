import { List as OriginalList } from './List';
import { ListItem } from './ListItem/ListItem';

type CompoundList = typeof OriginalList & {
  Item: typeof ListItem;
};

export const List = OriginalList as CompoundList;
List.Item = ListItem;
