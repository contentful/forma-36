import { Grid as OriginalGrid } from './Grid';
import { GridItem } from './GridItem/GridItem';

type CompoundGrid = typeof OriginalGrid & {
  Item: typeof GridItem;
};

export const Grid = OriginalGrid as CompoundGrid;
Grid.Item = GridItem;
