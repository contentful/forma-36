import React from 'react';
import { FormControl, TextInput, Grid } from '@contentful/f36-components';

export default function FormControlCharacterCountExample() {
  const limit = 20;
  return (
    <FormControl>
      <FormControl.Label isRequired>Name</FormControl.Label>
      <TextInput defaultValue="Initial value" maxLength={limit} />
      <Grid columns="auto 80px">
        <FormControl.HelpText>
          Name should be no longer than {limit} characters
        </FormControl.HelpText>
        <FormControl.Counter />
      </Grid>
    </FormControl>
  );
}
