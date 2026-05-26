import React from 'react';
import { Stack, Badge } from '@contentful/f36-components';
import { Tag } from '@contentful/f36-pill-next';

export default function TagRemovableExample() {
  return (
    <Stack flexDirection="row">
      <Tag
        label="Category"
        variant="secondary"
        badge={<Badge variant="secondary">3 items</Badge>}
        onRemove={() => console.log('removed')}
      />
      <Tag
        label="Restricted"
        variant="warning"
        tooltipContent="This tag has restricted visibility"
        onRemove={() => console.log('removed')}
      />
    </Stack>
  );
}
