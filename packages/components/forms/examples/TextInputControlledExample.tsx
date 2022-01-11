import React, { useState } from 'react';
import { TextInput, FormControl } from '@contentful/f36-components';

export default function TextInputControlledExample() {
  const [value, setValue] = useState('your-email@domain.com');
  return (
    <FormControl isRequired isInvalid={!value}>
      <FormControl.Label>Email</FormControl.Label>
      <TextInput
        value={value}
        type="email"
        name="email"
        placeholder="your-email@domain.com"
        onChange={(e) => setValue(e.target.value)}
      />
      <FormControl.HelpText>Provide your email address</FormControl.HelpText>
      {!value && (
        <FormControl.ValidationMessage>
          Please, provide your email
        </FormControl.ValidationMessage>
      )}
    </FormControl>
  );
}
