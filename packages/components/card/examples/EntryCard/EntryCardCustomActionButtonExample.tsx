import React from 'react';
import { EntryCard, IconButton } from '@contentful/f36-components';
import { CloseIcon } from '@contentful/f36-icons';

export default function EntryCardCustomActionButtonExample() {
  function CustomActionButton() {
    return (
      <IconButton
        aria-label="Actions"
        icon={<CloseIcon variant="muted" />}
        size="small"
        variant="transparent"
        onClick={() => {}}
      />
    );
  }

  return (
    <EntryCard
      contentType="Author"
      title="John Doe"
      description="Research and recommendations for modern stack websites."
      customActionButton={<CustomActionButton />}
    />
  );
}
