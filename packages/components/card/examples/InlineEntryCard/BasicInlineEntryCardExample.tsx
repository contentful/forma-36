import React from 'react';
import { InlineEntryCard } from '@contentful/f36-components';
//import { InlineEntryCard, MenuItem} from '@contentful/f36-components';

export default function BasicInlineEntryCardExample() {
  return (
    <>
      <InlineEntryCard
        actions={[<li key="copy">Copy</li>, <li key="delete">Delete</li>]}
        status="published"
        title="Published Entry Title"
      >
        Published entry body
      </InlineEntryCard>
      <InlineEntryCard
        actions={[<li key="copy">Copy</li>, <li key="delete">Delete</li>]}
        status="new"
        title="New Entry Title"
      >
        New entry body
      </InlineEntryCard>
      <InlineEntryCard
        actions={[<li key="copy">Copy</li>, <li key="delete">Delete</li>]}
        status="draft"
        title="Draft Entry Title"
      >
        Draft entry body
      </InlineEntryCard>
      <InlineEntryCard
        actions={[<li key="copy">Copy</li>, <li key="delete">Delete</li>]}
        status="deleted"
        title="Deleted Entry Title"
      >
        Deleted entry body
      </InlineEntryCard>
      <InlineEntryCard
        actions={[<li key="copy">Copy</li>, <li key="delete">Delete</li>]}
        status="changed"
        title="Changed Entry Title"
      >
        Changed entry body
      </InlineEntryCard>
      <InlineEntryCard
        actions={[<li key="copy">Copy</li>, <li key="delete">Delete</li>]}
        status="archived"
        title="Archived Entry Title"
      >
        Archived entry body
      </InlineEntryCard>
    </>
  );
}
