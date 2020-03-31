import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, number, select } from '@storybook/addon-knobs';
import tokens from '@contentful/forma-36-tokens';

import Grid from './Grid';
import GridItem from './GridItem';
import notes from './Grid.md';

const gridKnobsId = 'Grid Props';
const spacingValues = [
  'spacing2Xs',
  'spacingXs', 
  'spacingS', 
  'spacingM', 
  'spacingL', 
  'spacingXl', 
  'spacing2Xl', 
  'spacing3Xl', 
  'spacing4Xl'
];

const DemoBoxes = ({times}: {times: number}) => {
  const styles = {
    height: '100px',
    backgroundColor: tokens.colorIceDark
  }
  let result = [];
  for (let i=0; i<=times; i++) {
    result.push(
      <GridItem style={styles}></GridItem>
    )
  }
  return <>{result}</>
}

storiesOf('Components|Grid', module)
  .addParameters({
    propTypes: Grid['__docgenInfo'],
  })
  .add('default', () => {
    const knobs = {
      columns: number('columns', 6, '', gridKnobsId),
      rows: number('rows', 4, '', gridKnobsId),
      columnGap: select('columnGap', spacingValues, 'spacingXs', gridKnobsId),
      rowGap: select('rowGap', spacingValues, 'spacingXs', gridKnobsId),
      className: text('className', '', gridKnobsId),
      exampleBoxes: number('Example Items', 23)
    };

    return (
      <Grid 
        columns={knobs.columns}
        rows={knobs.rows}
        columnGap={knobs.columnGap}
        rowGap={knobs.rowGap}
        flow='row'
        className={knobs.className}>
          <DemoBoxes times={knobs.exampleBoxes} />
      </Grid>
    )
  }, {notes});
