import React from 'react';
import { EntryCard } from '@contentful/f36-components';

export default function EntryCardThumbnailExample() {
  return (
    <EntryCard
      status="published"
      contentType="Author"
      title="John Doe"
      description="Research and recommendations for modern stack websites."
      thumbnailElement={<img alt="random" src="https://picsum.photos/200" />}
    />
  );
}
