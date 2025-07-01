import React from 'react';
import { Button, Stack } from '@contentful/f36-components';
import {
  PlusIcon,
  CaretDownIcon,
  GearSixIcon,
} from '@contentful/f36-icons-alpha';

export default function ButtonWithIconExample() {
  return (
    <Stack>
      <Button startIcon={<PlusIcon />} variant="primary">
        Add
      </Button>
      <Button endIcon={<CaretDownIcon />}>Menu</Button>
      <Button startIcon={<GearSixIcon variant="muted" />} variant="transparent">
        Settings
      </Button>
    </Stack>
  );
}
