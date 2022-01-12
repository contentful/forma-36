import React from 'react';
import { FormControl, TextInput } from '@contentful/f36-components';

export default function FormControlInvalidExample() {
  return (
    <FormControl isInvalid>
      <FormControl.Label>Name</FormControl.Label>
      <TextInput />
      <FormControl.ValidationMessage>Error</FormControl.ValidationMessage>
      <FormControl.HelpText>Please enter your first name</FormControl.HelpText>
    </FormControl>
  );
}
