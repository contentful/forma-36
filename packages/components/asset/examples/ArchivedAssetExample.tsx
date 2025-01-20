import React from 'react';
import { Asset } from '@contentful/f36-components';

export default function ArchivedAssetExample() {
  return (
    <Asset
      src="https://images.ctfassets.net/iq4lnigp6fgt/72KhxI84kw1SE9gP8gDp7R/c5fa24bdc295a318018aea0ca46e2de8/forma-36-storybook-asset.png?fit=fill&f=top_left&w=200&h=300"
      status="archived"
      title="An archived image asset"
      type="image"
    />
  );
}
