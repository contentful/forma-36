import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, number, select } from '@storybook/addon-knobs';
import tokens from '@contentful/forma-36-tokens';

import Grid from '../Grid';
import GridItem from './GridItem';
import notes from './GridItem.md';

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
  'spacing4Xl',
];

const styles = {
  demoBox: {
    backgroundColor: tokens.colorContrastLight,
  },
  demoBoxDark: {
    backgroundColor: tokens.colorContrastDark,
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

storiesOf('Components/Grid/GridItem', module)
  .addParameters({
    propTypes: GridItem['__docgenInfo'],
    component: GridItem,
  })
  .add(
    'default',
    () => {
      const knobs = {
        exampleBoxes: number('Example Items', 23),
        exampleGridHeight: text('Example Grid Height', '90vh'),
        grid: {
          columns: number('columns', 6, '', gridKnobsId),
          rows: number('rows', 4, '', gridKnobsId),
          columnGap: select(
            'columnGap',
            spacingValues,
            'spacingXs',
            gridKnobsId,
          ),
          rowGap: select('rowGap', spacingValues, 'spacingXs', gridKnobsId),
          className: text('className', '', gridKnobsId),
        },
        gridItem: {
          columnStart: number('columnStart', 1, '', gridItemKnobsId),
          columnEnd: number('columnEnd', 3, '', gridItemKnobsId),
          rowStart: number('rowStart', 1, '', gridItemKnobsId),
          rowEnd: number('rowEnd', 4, '', gridItemKnobsId),
          area: text('area', '', gridItemKnobsId),
          className: text('className', '', gridItemKnobsId),
          order: number('order', 0, '', gridItemKnobsId),
        },
      };

      return (
        <Grid
          columns={knobs.grid.columns}
          rows={knobs.grid.rows}
          columnGap={knobs.grid.columnGap}
          rowGap={knobs.grid.rowGap}
          className={knobs.grid.className}
          style={{ height: knobs.exampleGridHeight }}
        >
          <GridItem
            style={styles.demoBoxDark}
            columnStart={knobs.gridItem.columnStart}
            columnEnd={knobs.gridItem.columnEnd}
            rowStart={knobs.gridItem.rowStart}
            rowEnd={knobs.gridItem.rowEnd}
            className={knobs.gridItem.className}
            area={knobs.gridItem.area}
            order={knobs.gridItem.order}
          />
          <DemoBox id="gi" times={knobs.exampleBoxes} />
        </Grid>
      );
    },
    { notes },
  );
