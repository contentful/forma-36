import React from 'react';
import tokens from '@contentful/f36-tokens';

import { GridInternalProps } from '../src/Grid/Grid';
import { GridItemInternalProps } from '../src/Grid/GridItem/GridItem';
import { Grid } from '../src';

const styles = {
  demoBox: {
    backgroundColor: tokens.gray800,
  },
  demoBoxDark: {
    backgroundColor: tokens.colorBlack,
  },
};

export default {
  title: 'Layout/Grid/GridItem',
  component: Grid.Item,
  parameters: {
    propTypes: [Grid.Item['__docgenInfo']],
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
      result.push(<Grid.Item key={`${id}-${i}`} style={styles.demoBox} />);
    }
    return <>{result}</>;
  }
  return <Grid.Item style={styles.demoBox}></Grid.Item>;
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
    <Grid.Item
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
  columnGap: 'spacingXs',
  rowGap: 'spacingXs',
  columnStart: 1,
  columnEnd: 3,
  rowStart: 1,
  rowEnd: 4,
  order: 0,
};
