import React from 'react';
import { EntryCard } from '@contentful/f36-components';

export default function EntryCardExample() {
  return (
    <EntryCard
      status="published"
      contentType="Author"
      title="John Doe"
      description="Research and recommendations for modern stack websites."
    />
  );
}
