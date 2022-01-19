import React from 'react';
import { Asset } from '@contentful/f36-components';

export default function ImageAssetExample() {
  return (
    <Asset
      src="https://placeimg.com/200/300/animals"
      title="An image asset"
      type="image"
    />
  );
}
