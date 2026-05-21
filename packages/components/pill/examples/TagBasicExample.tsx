import React from 'react';
import { Stack, Tag, Badge } from '@contentful/f36-components';

export default function TagBasicExample() {
  return (
    <Stack flexDirection="row">
      <Tag label="Category" badge={<Badge variant="secondary">Public</Badge>} />
      <Tag
        label="Topic"
        variant="primary"
        badge={<Badge variant="primary">Active</Badge>}
      />
    </Stack>
  );
}
