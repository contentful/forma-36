import React from 'react';
import { Stack } from '@contentful/f36-components';
import { PillNext } from '@contentful/f36-pill-next';

export default function PillNextSizesExample() {
  return (
    <Stack flexDirection="column" alignItems="flex-start">
      <Stack flexDirection="row">
        <PillNext label="Medium" size="medium" />
        <PillNext label="Medium warning" size="medium" variant="warning" />
      </Stack>
      <Stack flexDirection="row">
        <PillNext label="Small" size="small" />
        <PillNext label="Small warning" size="small" variant="warning" />
      </Stack>
    </Stack>
  );
}
