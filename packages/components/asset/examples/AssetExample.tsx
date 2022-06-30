import React from 'react';
import { Asset } from '@contentful/f36-components';

export default function AssetExample() {
  return (
    <Asset
      src="https://placeimg.com/200/300/animals"
      title="A PDF asset"
      type="pdf"
    />
  );
}
