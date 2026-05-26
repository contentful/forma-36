import React from 'react';
import { Stack } from '@contentful/f36-components';
import { Tag } from '@contentful/f36-pill-next';

export default function TagBasicExample() {
  return (
    <Stack flexDirection="row">
      <Tag label="Secondary" variant="secondary" />
      <Tag label="Primary" variant="primary" />
      <Tag label="Warning" variant="warning" />
      <Tag label="Negative" variant="negative" />
    </Stack>
  );
}
