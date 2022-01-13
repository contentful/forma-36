import React from 'react';
import { Textarea, Stack } from '@contentful/f36-components';

export default function TextareaStatesExample() {
  return (
    <Stack flexDirection="column">
      <Textarea
        defaultValue="I'm disabled Textarea"
        isDisabled
        name="value-1"
      />
      <Textarea defaultValue="I'm invalid Textarea" isInvalid name="value-1" />
      <Textarea
        defaultValue="I'm read-only Textarea"
        isReadOnly
        name="value-1"
      />
    </Stack>
  );
}
