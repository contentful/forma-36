import React from 'react';
import { AssetCard } from '@contentful/f36-components';

export default function AssetCardLoadingExample() {
  return (
    <AssetCard
      status="published"
      type="image"
      title="Everest"
      src="https://bit.ly/31yL3Ps"
      isLoading
    />
  );
}
