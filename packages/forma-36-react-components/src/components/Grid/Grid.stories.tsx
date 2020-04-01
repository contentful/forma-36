import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, number, select } from '@storybook/addon-knobs';
import tokens from '@contentful/forma-36-tokens';

import Grid from './Grid';
import GridItem from './GridItem';
import notes from './Grid.md';

const gridKnobsId = 'Grid Props';
const gridItemKnobsId = 'GridItem Props';
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

const styles = {
  demoBox: {
    backgroundColor: tokens.colorContrastLight
  },
  demoBoxDark: {
    backgroundColor: tokens.colorContrastDark
  },
}

const DemoBox = ({times, id}: {times?: number; id?: string}) => {
  if(times) {
    let result = [];
    for (let i=0; i<=times; i++) {
      result.push(<GridItem key={`${id}-${i}`} style={styles.demoBox} />)
    }
    return <>{result}</>
  }
  return <GridItem style={styles.demoBox}></GridItem>
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
      exampleBoxes: number('Example Items', 23),
      exampleGridHeight: text('Example Grid Height', '90vh')
    };

    return (
      <Grid 
        columns={knobs.columns}
        rows={knobs.rows}
        columnGap={knobs.columnGap}
        rowGap={knobs.rowGap}
        flow='row'
        className={knobs.className}
        style={{height: knobs.exampleGridHeight}}>
          <DemoBox id="g" times={knobs.exampleBoxes} />
      </Grid>
    )
  }, {notes})
  // .add('GridItem', () => {
  //   const knobs = {
  //     exampleBoxes: number('Example Items', 22),
  //     exampleGridHeight: text('Example Grid Height', '60vh'),
  //     grid: {
  //       columns: number('columns', 6, '', gridKnobsId),
  //       rows: number('rows', 4, '', gridKnobsId),
  //       columnGap: select('columnGap', spacingValues, 'spacingXs', gridKnobsId),
  //       rowGap: select('rowGap', spacingValues, 'spacingXs', gridKnobsId),
  //       className: text('className', '', gridKnobsId)
  //     },
  //     gridItem: {
  //       columnStart: number('columnStart', 1, '', gridItemKnobsId),
  //       columnEnd: number('columnEnd', 3, '', gridItemKnobsId),
  //       rowStart: number('rowStart', 1, '', gridItemKnobsId),
  //       rowEnd: number('rowEnd', 4, '', gridItemKnobsId),
  //       area: text('className', '', gridItemKnobsId),
  //       order: number('order', 0, '', gridItemKnobsId)
  //     }
  //   }

  //   return (
  //     <Grid
  //       columns={knobs.grid.columns}
  //       rows={knobs.grid.rows}
  //       columnGap={knobs.grid.columnGap}
  //       rowGap={knobs.grid.rowGap}
  //       flow='row'
  //       className={knobs.grid.className}
  //       style={{height: knobs.exampleGridHeight}}>
  //       <GridItem
  //         style={styles.demoBoxDark}
  //         columnStart={1}
  //         columnEnd={4}
  //         rowStart={knobs.gridItem.rowStart}
  //         rowEnd={knobs.gridItem.rowEnd}
  //         area={knobs.gridItem.area}
  //         order={knobs.gridItem.order}
  //        />
  //       <DemoBox id="gi" times={knobs.exampleBoxes} />
  //     </Grid>
  //   )
  // });
