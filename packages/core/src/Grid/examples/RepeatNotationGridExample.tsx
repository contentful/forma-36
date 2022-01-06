import React from 'react';
import { Grid } from '@contentful/f36-components';
import tokens from '@contentful/f36-tokens';

export default function RepeatNotationGridExample() {
  return (
    <>
      <Grid columns="1fr 2fr 1fr 2fr 1fr 2fr" columnGap="spacingM">
        <Grid.Item
          style={{ backgroundColor: tokens.gray800, height: '100px' }}
        />
        <Grid.Item
          style={{ backgroundColor: tokens.gray800, height: '100px' }}
        />
        <Grid.Item
          style={{ backgroundColor: tokens.gray800, height: '100px' }}
        />
        <Grid.Item
          style={{ backgroundColor: tokens.gray800, height: '100px' }}
        />
        <Grid.Item
          style={{ backgroundColor: tokens.gray800, height: '100px' }}
        />
        <Grid.Item
          style={{ backgroundColor: tokens.gray800, height: '100px' }}
        />
      </Grid>

      <Grid
        columns="repeat(3, 1fr 2fr)"
        columnGap="spacingM"
        marginTop="spacingM"
      >
        <Grid.Item
          style={{ backgroundColor: tokens.gray600, height: '100px' }}
        />
        <Grid.Item
          style={{ backgroundColor: tokens.gray600, height: '100px' }}
        />
        <Grid.Item
          style={{ backgroundColor: tokens.gray600, height: '100px' }}
        />
        <Grid.Item
          style={{ backgroundColor: tokens.gray600, height: '100px' }}
        />
        <Grid.Item
          style={{ backgroundColor: tokens.gray600, height: '100px' }}
        />
        <Grid.Item
          style={{ backgroundColor: tokens.gray600, height: '100px' }}
        />
      </Grid>
    </>
  );
}
