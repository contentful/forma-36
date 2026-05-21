import React from 'react';
import { Stack } from '@contentful/f36-components';
import { PillNext } from '@contentful/f36-pill-next';

export default function PillNextRemovableExample() {
  return (
    <Stack flexDirection="row">
      <PillNext label="Removable" onRemove={() => {}} />
      <PillNext label="Disabled remove" onRemove={() => {}} isDisabled />
    </Stack>
  );
}
