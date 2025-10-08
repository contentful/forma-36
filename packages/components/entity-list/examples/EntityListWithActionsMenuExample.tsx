import React from 'react';
import {
  EntityList,
  MenuItem,
  MenuSectionTitle,
} from '@contentful/f36-components';

export default function EntityListWithActionsMenuExample() {
  return (
    <EntityList>
      <EntityList.Item
        title="Entry title"
        description="Description"
        contentType="My content type"
        status="draft"
        entityType="entry"
        actions={[
          <MenuSectionTitle key="title">Actions</MenuSectionTitle>,
          <MenuItem key="edit">Edit</MenuItem>,
          <MenuItem key="download">Download</MenuItem>,
          <MenuItem key="remove">Remove</MenuItem>,
        ]}
      />
      <EntityList.Item
        title="Other entry title"
        description="Description"
        contentType="My content type"
        status="published"
        entityType="entry"
        actions={[
          <MenuSectionTitle key="title">Actions</MenuSectionTitle>,
          <MenuItem key="edit">Edit</MenuItem>,
          <MenuItem key="download">Download</MenuItem>,
          <MenuItem key="remove">Remove</MenuItem>,
        ]}
      />
    </EntityList>
  );
}
