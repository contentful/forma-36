/* eslint-disable */
/**need to silence this file for now */

import React from 'react';
import { InlineEntryCard } from '@contentful/f36-components';
//import { InlineEntryCard, MenuItem} from '@contentful/f36-components';

export default function InlineEntryCardWithActionsExample() {
  const handleEditAction = () => console.log('handleEditAction');
  const handleUnpublishAction = () => console.log('handleUnpublishAction');
  const handleCopyAction = () => console.log('handleCopyAction');
  const handleDeleteAction = () => console.log('handleDeleteAction');

  return (
    <InlineEntryCard
      actions={[
        <li key="edit" onClick={handleEditAction}>
          Edit
        </li>,
        <li key="unpublish" onClick={handleUnpublishAction}>
          Unpublish
        </li>,
        <li key="copy" onClick={handleCopyAction}>
          Copy
        </li>,
        <li key="delete" onClick={handleDeleteAction}>
          Delete
        </li>,
      ]}
      status="published"
      title="Forma 36 Entry Title"
    >
      Forma 36 entry body
    </InlineEntryCard>
  );
}
