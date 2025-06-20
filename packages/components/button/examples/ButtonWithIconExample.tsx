import React from 'react';
import { Button, Stack } from '@contentful/f36-components';

import {
  CaretDownIcon,
  PlusIcon,
  GearSixIcon,
} from '@contentful/f36-icons-alpha';

import tokens from '@contentful/f36-tokens';

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
