import React from 'react';
import { Grid } from '@contentful/f36-components';
import tokens from '@contentful/f36-tokens';

export default function BasicGridExample() {
  return (
    <Grid columns="1fr 2fr" rowGap="spacingM" columnGap="spacingM">
      <Grid.Item style={{ backgroundColor: tokens.gray800, height: '100px' }} />
      <Grid.Item style={{ backgroundColor: tokens.gray800, height: '100px' }} />
      <Grid.Item style={{ backgroundColor: tokens.gray800, height: '100px' }} />
      <Grid.Item style={{ backgroundColor: tokens.gray800, height: '100px' }} />
      <Grid.Item style={{ backgroundColor: tokens.gray800, height: '100px' }} />
      <Grid.Item style={{ backgroundColor: tokens.gray800, height: '100px' }} />
      <Grid.Item style={{ backgroundColor: tokens.gray800, height: '100px' }} />
      <Grid.Item style={{ backgroundColor: tokens.gray800, height: '100px' }} />
    </Grid>
  );
}
