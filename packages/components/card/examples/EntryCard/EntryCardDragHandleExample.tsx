import React from 'react';
import { EntryCard } from '@contentful/f36-components';

export default function EntryCardDragHandleExample() {
  return (
    <EntryCard
      status="published"
      contentType="Author"
      title="John Doe"
      description="Research and recommendations for modern stack websites."
      withDragHandle
    />
  );
}
