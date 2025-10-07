import React from 'react';
import { AssetCard } from '@contentful/f36-components';

export default function AssetCardExample() {
  return (
    <AssetCard
      status="published"
      type="image"
      title="Everest"
      src="https://bit.ly/31yL3Ps"
    />
  );
}
