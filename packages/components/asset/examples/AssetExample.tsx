import React from 'react';
import { Asset } from '@contentful/f36-components';

export default function AssetExample() {
  return (
    <Asset
      src="https://placeimg.com/200/300/animals"
      title="An PDF asset"
      type="pdf"
    />
  );
}
