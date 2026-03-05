import React from 'react';
import { Flex } from '@contentful/f36-core';
import { AssetIcon } from '@contentful/f36-asset';

export default function AssetIconExample() {
  return (
    <Flex gap="spacingM" flexWrap="wrap">
      <AssetIcon type="archive" />
      <AssetIcon type="audio" />
      <AssetIcon type="code" />
      <AssetIcon type="image" />
      <AssetIcon type="markup" />
      <AssetIcon type="pdf" />
      <AssetIcon type="plaintext" />
      <AssetIcon type="presentation" />
      <AssetIcon type="richtext" />
      <AssetIcon type="spreadsheet" />
      <AssetIcon type="video" />
    </Flex>
  );
}
