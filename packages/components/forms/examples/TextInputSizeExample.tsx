import React from 'react';
import { TextInput, Stack } from '@contentful/f36-components';

export default function TextInputSizeExample() {
  return (
    <Stack flexDirection="column">
      <TextInput size="small" defaultValue="I'm a small TextInput" />
      <TextInput size="medium" defaultValue="I'm a medium TextInput" />
    </Stack>
  );
}
