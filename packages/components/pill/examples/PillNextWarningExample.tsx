import React from 'react';
import { Stack, PillNext } from '@contentful/f36-components';

export default function PillNextWarningExample() {
  return (
    <Stack flexDirection="row">
      <PillNext
        label="Restricted"
        variant="warning"
        tooltipContent="This tag has restricted visibility"
        onRemove={() => {}}
      />
      <PillNext
        label="Deleted"
        variant="negative"
        tooltipContent="This tag was deleted"
        onRemove={() => {}}
      />
    </Stack>
  );
}
