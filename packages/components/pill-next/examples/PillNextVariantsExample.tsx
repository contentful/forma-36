import React from 'react';
import { Stack } from '@contentful/f36-components';
import { PillNext } from '@contentful/f36-pill-next';

export default function PillNextVariantsExample() {
  return (
    <Stack flexDirection="row">
      <PillNext label="Secondary" variant="secondary" />
      <PillNext label="Primary" variant="primary" />
      <PillNext label="Warning" variant="warning" />
      <PillNext label="Negative" variant="negative" />
    </Stack>
  );
}
