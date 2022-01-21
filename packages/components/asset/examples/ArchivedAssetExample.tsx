import React from 'react';
import { Asset } from '@contentful/f36-components';

export default function ArchivedAssetExample() {
  return (
    <Asset
      src="https://placeimg.com/200/300/animals"
      status="archived"
      title="An archived image asset"
      type="image"
    />
  );
}
