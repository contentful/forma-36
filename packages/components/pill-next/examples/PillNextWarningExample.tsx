import React from 'react';
import { Stack } from '@contentful/f36-components';
import { PillNext } from '@contentful/f36-pill-next';
import { XIcon } from '@contentful/f36-icons';

export default function PillNextWarningExample() {
  return (
    <Stack flexDirection="row">
      <PillNext
        label="Restricted"
        variant="warning"
        tooltipContent="This tag has restricted visibility"
        actionIcon={<XIcon />}
        onAction={() => {}}
        actionButtonLabel="Remove"
      />
      <PillNext
        label="Deleted"
        variant="negative"
        tooltipContent="This tag was deleted"
        actionIcon={<XIcon />}
        onAction={() => {}}
        actionButtonLabel="Remove"
      />
    </Stack>
  );
}
