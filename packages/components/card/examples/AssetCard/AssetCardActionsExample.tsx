import React from 'react';
import { AssetCard, MenuItem } from '@contentful/f36-components';

export default function AssetCardActionsExample() {
  return (
    <AssetCard
      status="published"
      type="image"
      title="Everest"
      src="https://bit.ly/31yL3Ps"
      actions={[
        <MenuItem key="copy" onClick={() => alert('copy')}>
          Copy
        </MenuItem>,
        <MenuItem key="delete" onClick={() => alert('delete')}>
          Delete
        </MenuItem>,
      ]}
    />
  );
}
