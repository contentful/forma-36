import React from 'react';
import { EntityList } from '@contentful/f36-components';

export default function EntityListWithDragHandleExample() {
  return (
    <EntityList>
      <EntityList.Item
        title="Entry 1"
        description="Description"
        contentType="My content type"
        status="published"
        withDragHandle
      />
      <EntityList.Item
        title="Entry 2"
        description="Description"
        contentType="My content type"
        status="draft"
        withDragHandle
      />
    </EntityList>
  );
}
