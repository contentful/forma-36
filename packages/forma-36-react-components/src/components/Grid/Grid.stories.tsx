import React from 'react';
import tokens from '@contentful/forma-36-tokens';

import Grid from './Grid';
import GridItem from './GridItem';
import notes from './README.mdx';

const styles = {
  demoBox: {
    backgroundColor: tokens.colorContrastLight,
  },
  demoBoxDark: {
    backgroundColor: tokens.colorContrastDark,
  },
};

export default {
  title: '(alpha)/Grid',
  component: Grid,
  subcomponents: { GridItem },
  parameters: {
    propTypes: [Grid['__docgenInfo'], GridItem['__docgenInfo']],
    notes,
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

export const Default = ({ exampleBoxes, exampleGridHeight, ...args }) => {
  return (
    <div style={{ width: '90vw' }}>
      <Grid {...args} style={{ height: exampleGridHeight }}>
        <DemoBox id="g" times={exampleBoxes} />
      </Grid>
    </div>
  );
};
Default.args = {
  exampleBoxes: 24,
  exampleGridHeight: '90vh',
  columns: 6,
  rows: 4,
  columnGap: 'spacingXs',
  rowGap: 'spacingXs',
  flow: 'row',
};
