import React from 'react';
import { Button, Stack } from '@contentful/f36-components';
import { PlusIcon, ChevronDownIcon } from '@contentful/f36-icons';

export default function ButtonWithIconExample() {
  return (
    <Stack>
      <Button startIcon={<PlusIcon />}>Add</Button>
      <Button endIcon={<ChevronDownIcon />}>Menu</Button>
    </Stack>
  );
}
