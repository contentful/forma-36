import React from 'react';
import { TextInput, Stack } from '@contentful/f36-components';

export default function TextInputStatesExample() {
  return (
    <Stack flexDirection="column">
      <TextInput
        defaultValue="I'm disabled TextInput"
        isDisabled
        name="value-1"
      />
      <TextInput
        defaultValue="I'm invalid TextInput"
        isInvalid
        name="value-1"
      />
      <TextInput
        defaultValue="I'm read-only TextInput"
        isReadOnly
        name="value-1"
      />
    </Stack>
  );
}
