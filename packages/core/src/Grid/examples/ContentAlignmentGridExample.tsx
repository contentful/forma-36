import React from 'react';
import { Grid } from '@contentful/f36-components';
import tokens from '@contentful/f36-tokens';

export default function ContentAlignmentGridExample() {
  return (
    <Grid columns="250px 250px" justifyContent="space-between">
      <Grid.Item style={{ backgroundColor: tokens.gray700, height: '100px' }} />
      <Grid.Item style={{ backgroundColor: tokens.gray700, height: '100px' }} />
    </Grid>
  );
}
