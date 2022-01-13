import React from 'react';
import { FormControl, TextInput, Flex } from '@contentful/f36-components';

export default function FormControlCharacterCountExample() {
  return (
    <FormControl>
      <FormControl.Label isRequired>Name</FormControl.Label>
      <TextInput maxLength={8} />
      <Flex justifyContent="space-between">
        <FormControl.HelpText>
          Name should be no longer than 8 characters
        </FormControl.HelpText>
        <FormControl.Counter />
      </Flex>
    </FormControl>
  );
}
