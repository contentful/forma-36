import React from 'react';
import { Stack, Badge } from '@contentful/f36-components';
import { Tag } from '@contentful/f36-pill-next';

export default function TagBasicExample() {
  return (
    <Stack flexDirection="row">
      <Tag
        label="Secondary"
        variant="secondary"
        badge={<Badge variant="secondary">Draft</Badge>}
      />
      <Tag
        label="Primary"
        variant="primary"
        badge={<Badge variant="primary">Published</Badge>}
      />
      <Tag
        label="Warning"
        variant="warning"
        badge={<Badge variant="warning">Restricted</Badge>}
      />
      <Tag
        label="Negative"
        variant="negative"
        badge={<Badge variant="negative">Deleted</Badge>}
      />
    </Stack>
  );
}
