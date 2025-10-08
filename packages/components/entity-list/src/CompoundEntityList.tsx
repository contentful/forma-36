import { EntityList as OriginalEntityList } from './EntityList';
import { EntityListItem } from './EntityListItem/EntityListItem';

type CompoundEntityList = typeof OriginalEntityList & {
  Item: typeof EntityListItem;
};

export const EntityList = OriginalEntityList as CompoundEntityList;
EntityList.Item = EntityListItem;
