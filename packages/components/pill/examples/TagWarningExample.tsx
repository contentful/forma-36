import React from 'react';
import { Stack, Tag, Badge } from '@contentful/f36-components';

export default function TagWarningExample() {
  return (
    <Stack flexDirection="row">
      <Tag
        label="Restricted access"
        variant="warning"
        badge={<Badge variant="warning">Limited</Badge>}
        tooltipContent="This tag has restricted visibility"
        onRemove={() => {}}
      />
      <Tag
        label="Deleted tag"
        variant="negative"
        badge={<Badge variant="negative">Removed</Badge>}
        tooltipContent="This tag was deleted from the system"
        onRemove={() => {}}
      />
    </Stack>
  );
}
