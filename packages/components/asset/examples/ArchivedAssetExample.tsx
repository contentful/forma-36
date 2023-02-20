import React from 'react';
import { Asset } from '@contentful/f36-components';

export default function ArchivedAssetExample() {
  return (
    <Asset
      src="https://images.ctfassets.net/iq4lnigp6fgt/2EEEk92Kiz6KxREsjBLPAN/810d5a21650d91abad12e95da4cd3beb/2021-06_Everyone_is_Welcome_here_1_.png?fit=fill&f=top_left&w=200&h=300"
      status="archived"
      title="An archived image asset"
      type="image"
    />
  );
}
