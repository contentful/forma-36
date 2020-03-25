import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, number } from '@storybook/addon-knobs';
import tokens from '@contentful/forma-36-tokens';

import Grid from './Grid';
import GridItem from './GridItem';

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
    return (
      <Grid 
        columns={number('columns', 6)}
        rows={number('row', 2)}
        rowGap={'spacingS'} 
        className={text('className', '')}>
          <DemoBoxes times={number('Example Items', 17)} />
      </Grid>
    )
  });
