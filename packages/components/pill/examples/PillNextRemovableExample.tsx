import React from 'react';
import { Stack, PillNext } from '@contentful/f36-components';

export default function PillNextRemovableExample() {
  return (
    <Stack flexDirection="row">
      <PillNext label="Removable" onRemove={() => {}} />
      <PillNext label="Disabled remove" onRemove={() => {}} isDisabled />
    </Stack>
  );
}
