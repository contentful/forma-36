import React from 'react';
import { InlineEntryCard, MenuItem } from '@contentful/f36-components';

export default function BasicInlineEntryCardExample() {
  return (
    <>
      <InlineEntryCard
        actions={[
          <MenuItem key="copy">Copy</MenuItem>,
          <MenuItem key="delete">Delete</MenuItem>,
        ]}
        status="published"
        title="Published Entry Title"
      >
        Published entry body
      </InlineEntryCard>
      <InlineEntryCard
        actions={[
          <MenuItem key="copy">Copy</MenuItem>,
          <MenuItem key="delete">Delete</MenuItem>,
        ]}
        status="new"
        title="New Entry Title"
      >
        New entry body
      </InlineEntryCard>
      <InlineEntryCard
        actions={[
          <MenuItem key="copy">Copy</MenuItem>,
          <MenuItem key="delete">Delete</MenuItem>,
        ]}
        status="draft"
        title="Draft Entry Title"
      >
        Draft entry body
      </InlineEntryCard>
      <InlineEntryCard
        actions={[
          <MenuItem key="copy">Copy</MenuItem>,
          <MenuItem key="delete">Delete</MenuItem>,
        ]}
        status="deleted"
        title="Deleted Entry Title"
      >
        Deleted entry body
      </InlineEntryCard>
      <InlineEntryCard
        actions={[
          <MenuItem key="copy">Copy</MenuItem>,
          <MenuItem key="delete">Delete</MenuItem>,
        ]}
        status="changed"
        title="Changed Entry Title"
      >
        Changed entry body
      </InlineEntryCard>
      <InlineEntryCard
        actions={[
          <MenuItem key="copy">Copy</MenuItem>,
          <MenuItem key="delete">Delete</MenuItem>,
        ]}
        status="archived"
        title="Archived Entry Title"
      >
        Archived entry body
      </InlineEntryCard>
    </>
  );
}
