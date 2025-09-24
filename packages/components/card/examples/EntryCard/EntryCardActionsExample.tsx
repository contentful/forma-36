import React from 'react';
import { EntryCard } from '@contentful/f36-components';
//import { EntryCard, MenuItem } from '@contentful/f36-components';

export default function EntryCardActionsExample() {
  return (
    <EntryCard
      status="published"
      contentType="Author"
      title="John Doe"
      description="Research and recommendations for modern stack websites."
      actions={[
        <li>Copy</li>,
        <li>Delete</li>,
        // <MenuItem key="copy" onClick={() => alert('copy')}>
        //   Copy
        // </MenuItem>,
        // <MenuItem key="delete" onClick={() => alert('delete')}>
        //   Delete
        // </MenuItem>,
      ]}
    />
  );
}
