import React from 'react';
import tokens from '@contentful/f36-tokens';

import { Grid, GridInternalProps } from '../src/Grid/Grid';
import {
  GridItem,
  _GridItem,
  GridItemInternalProps,
} from '../src/Grid/GridItem/GridItem';

const styles = {
  demoBox: {
    backgroundColor: tokens.colorContrastLight,
  },
  demoBoxDark: {
    backgroundColor: tokens.colorContrastDark,
  },
};

export default {
  title: 'components/Grid/GridItem',
  component: GridItem,
  parameters: {
    propTypes: _GridItem['__docgenInfo'],
  },
  argTypes: {
    children: { control: { disable: true } },
    className: { control: { disable: true } },
    testId: { control: { disable: true } },
    as: { control: { disable: true } },
    style: { control: { disable: true } },
  },
};

const DemoBox = ({ times, id }: { times?: number; id?: string }) => {
  if (times) {
    const result = [];
    for (let i = 0; i < times; i++) {
      result.push(<GridItem key={`${id}-${i}`} style={styles.demoBox} />);
    }
    return <>{result}</>;
  }
  return <GridItem style={styles.demoBox}></GridItem>;
};

interface GridItemArgs extends GridItemInternalProps {
  exampleBoxes: number;
}

interface GridArgs extends GridInternalProps {
  exampleGridHeight: string;
}

export const Basic = ({
  exampleGridHeight,
  exampleBoxes,
  ...args
}: GridArgs & GridItemArgs) => (
  <Grid
    columns={args.columns}
    rows={args.rows}
    columnGap={args.columnGap}
    rowGap={args.rowGap}
    style={{ height: exampleGridHeight }}
  >
    <GridItem
      style={styles.demoBoxDark}
      columnStart={args.columnStart}
      columnEnd={args.columnEnd}
      rowStart={args.rowStart}
      rowEnd={args.rowEnd}
      area={args.area}
      order={args.order}
    />
    <DemoBox id="gi" times={exampleBoxes} />
  </Grid>
);

Basic.args = {
  exampleBoxes: 23,
  exampleGridHeight: '90vh',
  columns: 6,
  rows: 4,
  columnGap: 'xs',
  rowGap: 'xs',
  columnStart: 1,
  columnEnd: 3,
  rowStart: 1,
  rowEnd: 4,
  order: 0,
};
