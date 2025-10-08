import React from 'react';
import { AssetCard, Badge } from '@contentful/f36-components';

export default function AssetCardCustomBadgeExample() {
  return (
    <AssetCard
      status="published"
      type="image"
      title="Everest"
      src="https://bit.ly/31yL3Ps"
      badge={<Badge variant={'positive'}>custom status</Badge>}
    />
  );
}
