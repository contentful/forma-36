import React from 'react';
import { Button, Stack } from '@contentful/f36-components';
import { PlusIcon, ChevronDownIcon, SettingsIcon } from '@contentful/f36-icons';

export default function ButtonWithIconExample() {
  return (
    <Stack>
      <Button startIcon={<PlusIcon />} variant="primary">
        Add
      </Button>
      <Button endIcon={<ChevronDownIcon />}>Menu</Button>
      <Button
        startIcon={<SettingsIcon variant="muted" />}
        variant="transparent"
      >
        Settings
      </Button>
    </Stack>
  );
}
