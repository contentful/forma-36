import React from 'react';
import { EntryCard, IconButton } from '@contentful/f36-components';

import { XIcon } from '@contentful/f36-icons-alpha';

import tokens from '@contentful/f36-tokens';

export default function EntryCardCustomActionButtonExample() {
  function CustomActionButton() {
    return (
      <IconButton
        aria-label="Actions"
        icon={<XIcon color={tokens.gray600} />}
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
