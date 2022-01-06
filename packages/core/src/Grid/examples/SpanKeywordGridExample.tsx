import React from 'react';
import { Grid } from '@contentful/f36-components';
import tokens from '@contentful/f36-tokens';

export default function SpanKeywordGridExample() {
  return (
    <Grid columns={6}>
      <Grid.Item style={{ backgroundColor: tokens.gray700, height: '100px' }} />
      <Grid.Item
        area="span 4 / span 4"
        style={{ backgroundColor: tokens.gray700, height: '100px' }}
      />
    </Grid>
  );
}
