import React from 'react';
import { Stack, Badge } from '@contentful/f36-components';
import { Tag } from '@contentful/f36-pill-next';

export default function TagWithBadgeExample() {
  return (
    <Stack flexDirection="row">
      <Tag
        label="Blog post"
        variant="secondary"
        badge={<Badge variant="secondary">Draft</Badge>}
      />
      <Tag
        label="Landing page"
        variant="primary"
        badge={<Badge variant="primary">Published</Badge>}
      />
    </Stack>
  );
}
