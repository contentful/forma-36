import React from 'react';
import { Stack } from '@contentful/f36-components';
import { PillNext } from '@contentful/f36-pill-next';
import { XIcon } from '@contentful/f36-icons';

export default function PillNextRemovableExample() {
  return (
    <Stack flexDirection="row">
      <PillNext
        label="Removable"
        actionIcon={<XIcon />}
        onAction={() => {}}
        actionButtonLabel="Remove"
      />
      <PillNext
        label="Disabled remove"
        actionIcon={<XIcon />}
        onAction={() => {}}
        actionButtonLabel="Remove"
        isDisabled
      />
    </Stack>
  );
}
