import React from 'react';
import { TextInput, Stack } from '@contentful/f36-components';
import { MagnifyingGlassIcon } from '@contentful/f36-icons';

export default function TextInputIconExample() {
  return (
    <Stack flexDirection="column">
      <TextInput
        icon={<MagnifyingGlassIcon />}
        size="small"
        placeholder="Search for an item"
      />
      <TextInput
        icon={<MagnifyingGlassIcon />}
        size="medium"
        placeholder="Search for an item"
      />
    </Stack>
  );
}
