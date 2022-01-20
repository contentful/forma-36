import React from 'react';
import { EntityList } from '@contentful/f36-components';

export default function BasicEntityListExample() {
  return (
    <EntityList>
      <EntityList.Item
        title="Entry 1"
        description="Description"
        contentType="My content type"
        status="published"
      />
      <EntityList.Item
        title="Entry 2"
        description="Description"
        contentType="My content type"
        status="draft"
      />
      <EntityList.Item
        title="Entry 3"
        description="Description"
        contentType="My content type"
        status="archived"
      />
    </EntityList>
  );
}
