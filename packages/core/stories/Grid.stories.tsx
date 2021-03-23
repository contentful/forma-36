import React from 'react';
import tokens from '@contentful/f36-tokens';

import { Grid, GridInternalProps } from '../src/Grid/Grid';
import { GridItem } from '../src/Grid/GridItem/GridItem';

const styles = {
  demoBox: {
    backgroundColor: tokens.colorContrastLight,
  },
  demoBoxDark: {
    backgroundColor: tokens.colorContrastDark,
  },
};

export default {
  title: 'Layout/Grid',
  component: Grid,
  subcomponents: { GridItem },
  parameters: {
    propTypes: [Grid['__docgenInfo'], GridItem['__docgenInfo']],
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

interface Args extends GridInternalProps {
  exampleBoxes: number;
  exampleGridHeight: string;
}

export const Basic = ({ exampleBoxes, exampleGridHeight, ...args }: Args) => {
  return (
    <div style={{ width: '90vw' }}>
      <Grid {...args} style={{ height: exampleGridHeight }}>
        <DemoBox id="g" times={exampleBoxes} />
      </Grid>
    </div>
  );
};

Basic.args = {
  exampleBoxes: 24,
  exampleGridHeight: '90vh',
  columns: 6,
  rows: 4,
  columnGap: 'spacingXs',
  rowGap: 'spacingXs',
  flow: 'row',
};
