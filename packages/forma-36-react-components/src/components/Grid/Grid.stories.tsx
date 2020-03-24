import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';
import tokens from '@contentful/forma-36-tokens';

import Grid from './Grid';

const DemoBox = () => {
  const styles = {
    height: '100px',
    backgroundColor: tokens.colorIceDark
  }
  return (
    <div style={styles}></div>
  )
  
}

storiesOf('Components|Grid', module)
  .addParameters({
    propTypes: Grid['__docgenInfo'],
  })
  .add('default', () => (
    <Grid columns={6} className={text('className', '')}>
      <DemoBox />
      <DemoBox />
      <DemoBox />
      <DemoBox />
      <DemoBox />
      <DemoBox />
    </Grid>
  ));
