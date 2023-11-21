import React from 'react';
import { TextInput, Stack } from '@contentful/f36-components';
import { SearchIcon } from '@contentful/f36-icons';

export default function TextInputIconExample() {
  return (
    <Stack flexDirection="column">
      <TextInput
        icon={<SearchIcon />}
        size="small"
        placeholder="Search for an item"
      />
      <TextInput
        icon={<SearchIcon />}
        size="medium"
        placeholder="Search for an item"
      />
    </Stack>
  );
}
