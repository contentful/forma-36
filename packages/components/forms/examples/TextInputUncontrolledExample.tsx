import React from 'react';
import { TextInput, FormControl } from '@contentful/f36-components';

export default function TextInputUncontrolledExample() {
  return (
    <FormControl isRequired>
      <FormControl.Label>Email</FormControl.Label>
      <TextInput
        defaultValue=""
        name="email"
        type="email"
        placeholder="your-email@domain.com"
      />
      <FormControl.HelpText>Provide your email address</FormControl.HelpText>
    </FormControl>
  );
}
