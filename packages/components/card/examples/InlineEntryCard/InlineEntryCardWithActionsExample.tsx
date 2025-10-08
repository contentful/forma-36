import React from 'react';
import { InlineEntryCard, MenuItem } from '@contentful/f36-components';

export default function InlineEntryCardWithActionsExample() {
  const handleEditAction = () => console.log('handleEditAction');
  const handleUnpublishAction = () => console.log('handleUnpublishAction');
  const handleCopyAction = () => console.log('handleCopyAction');
  const handleDeleteAction = () => console.log('handleDeleteAction');

  return (
    <InlineEntryCard
      actions={[
        <MenuItem key="edit" onClick={handleEditAction}>
          Edit
        </MenuItem>,
        <MenuItem key="unpublish" onClick={handleUnpublishAction}>
          Unpublish
        </MenuItem>,
        <MenuItem key="copy" onClick={handleCopyAction}>
          Copy
        </MenuItem>,
        <MenuItem key="delete" onClick={handleDeleteAction}>
          Delete
        </MenuItem>,
      ]}
      status="published"
      title="Forma 36 Entry Title"
    >
      Forma 36 entry body
    </InlineEntryCard>
  );
}
