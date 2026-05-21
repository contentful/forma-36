import React from 'react';
import { Stack, Tag, Badge } from '@contentful/f36-components';

export default function TagRemovableExample() {
  return (
    <Stack flexDirection="row">
      <Tag
        label="Category"
        badge={<Badge variant="secondary">Public</Badge>}
        onRemove={() => {}}
      />
      <Tag
        label="Disabled remove"
        badge={<Badge variant="secondary">Public</Badge>}
        onRemove={() => {}}
        isDisabled
      />
    </Stack>
  );
}
