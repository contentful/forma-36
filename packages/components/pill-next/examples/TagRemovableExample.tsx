import React from 'react';
import { Stack, Badge } from '@contentful/f36-components';
import { Tag } from '@contentful/f36-pill-next';
import { XIcon } from '@contentful/f36-icons';

export default function TagRemovableExample() {
  return (
    <Stack flexDirection="row">
      <Tag
        label="Category"
        variant="secondary"
        badge={<Badge variant="secondary">3 items</Badge>}
        actionIcon={<XIcon />}
        onAction={() => console.log('removed')}
        actionButtonLabel="Remove"
      />
      <Tag
        label="Restricted"
        variant="warning"
        badge={<Badge variant="warning">Limited</Badge>}
        tooltipContent="This tag has restricted visibility"
        actionIcon={<XIcon />}
        onAction={() => console.log('removed')}
        actionButtonLabel="Remove"
      />
    </Stack>
  );
}
