import React from 'react';
import { AssetCard } from '@contentful/f36-components';
//import { AssetCard, MenuItem } from '@contentful/f36-components';

export default function AssetCardActionsExample() {
  return (
    <AssetCard
      status="published"
      type="image"
      title="Everest"
      src="https://bit.ly/31yL3Ps"
      actions={[<li key="copy">Copy</li>, <li key="delete">Delete</li>]}
    />
  );
}
