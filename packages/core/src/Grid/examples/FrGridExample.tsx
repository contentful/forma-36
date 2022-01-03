import React from 'react';
import { Grid } from '@contentful/f36-components';
import tokens from '@contentful/f36-tokens';

export default function FrGridExample() {
  const border = `1px solid ${tokens.gray700}`;
  return (
    <Grid columns="1fr 1fr 1fr">
      <p style={{ border }}>WelcomeToTheAwesomeContentfulGridSystem</p>
      <p style={{ border }}>Contentful</p>
      <p style={{ border }}>Forma 36</p>
      <p style={{ border }}>Welcome To The Awesome Contentful Grid System</p>
      <p style={{ border }}>Contentful</p>
      <p style={{ border }}>Forma 36</p>
    </Grid>
  );
}
