import React from 'react';
import tokens from '@contentful/f36-tokens';
import { Button, Stack } from '@contentful/f36-components';
import { PlusIcon, CaretDownIcon, GearSixIcon } from '@contentful/f36-icons';

export default function ButtonWithIconExample() {
  return (
    <Stack>
      <Button startIcon={<PlusIcon />} variant="primary">
        Add
      </Button>
      <Button endIcon={<CaretDownIcon />}>Menu</Button>
      <Button
        startIcon={<GearSixIcon color={tokens.gray600} />}
        variant="transparent"
      >
        Settings
      </Button>
    </Stack>
  );
}
