import React from 'react';
import { FormControl, TextInput } from '@contentful/f36-components';

export default function FormControlExample() {
  return (
    <FormControl isRequired>
      <FormControl.Label>Name</FormControl.Label>
      <TextInput />
      <FormControl.HelpText>Please enter your first name</FormControl.HelpText>
    </FormControl>
  );
}
