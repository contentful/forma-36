import React from 'react';
import { Textarea, FormControl } from '@contentful/f36-components';

export default function TextareaUncontrolledExample() {
  return (
    <FormControl isRequired>
      <FormControl.Label>Description</FormControl.Label>
      <Textarea
        defaultValue=""
        name="description"
        placeholder="Start typing..."
      />
      <FormControl.HelpText>Provide detailed information</FormControl.HelpText>
    </FormControl>
  );
}
