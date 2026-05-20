import React from 'react';
import { Stack, PillNext } from '@contentful/f36-components';

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
