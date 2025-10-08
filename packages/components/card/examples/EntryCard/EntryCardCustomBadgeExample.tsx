import React from 'react';
import { EntryCard, Badge } from '@contentful/f36-components';

export default function EntryCardCustomBadgeExample() {
  return (
    <EntryCard
      contentType="Author"
      title="John Doe"
      description="Research and recommendations for modern stack websites."
      badge={<Badge variant={'positive'}>custom status</Badge>}
    />
  );
}
