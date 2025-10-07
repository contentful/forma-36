import React from 'react';
import { EntryCard, Stack } from '@contentful/f36-components';

export default function EntryCardSizesExample() {
  return (
    <Stack flexDirection="column">
      <EntryCard
        status="published"
        contentType="Author"
        title="John Doe"
        description="Research and recommendations for modern stack websites."
        size="small"
      />
      <EntryCard
        status="published"
        contentType="Author"
        title="John Doe"
        description="Research and recommendations for modern stack websites."
        size="default"
      />
    </Stack>
  );
}
