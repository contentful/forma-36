import React, { useState } from 'react';
import { Textarea, FormControl } from '@contentful/f36-components';

export default function TextareaControlledExample() {
  const [value, setValue] = useState(
    'I think that Forma 36 is an amazing component library!',
  );
  return (
    <FormControl isRequired isInvalid={!value}>
      <FormControl.Label>Your comment</FormControl.Label>
      <Textarea
        value={value}
        placeholder="Start typing..."
        onChange={(e) => setValue(e.target.value)}
      />
      <FormControl.HelpText>
        Provide a short, but descriptive information
      </FormControl.HelpText>
      {!value && (
        <FormControl.ValidationMessage>
          Please, provide your message
        </FormControl.ValidationMessage>
      )}
    </FormControl>
  );
}
