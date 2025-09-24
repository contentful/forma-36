import React from 'react';
import { AssetCard, Stack } from '@contentful/f36-components';

export default function AssetCardSizesExample() {
  return (
    <Stack>
      <AssetCard
        status="published"
        type="image"
        title="Everest"
        src="https://bit.ly/31yL3Ps"
        size="small"
      />
      <AssetCard
        status="published"
        type="image"
        title="Everest"
        src="https://bit.ly/31yL3Ps"
        size="default"
      />
    </Stack>
  );
}
