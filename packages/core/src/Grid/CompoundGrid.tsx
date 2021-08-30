import { Grid as OriginalGrid } from './Grid';
import { GridItem } from './GridItem/GridItem';

type CompoundList = typeof OriginalGrid & {
  Item: typeof GridItem;
};

export const Grid = OriginalGrid as CompoundList;
Grid.Item = GridItem;
