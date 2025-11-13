import React from 'react';
import { Avatar } from '@contentful/f36-avatar';
import { Stack } from '@contentful/f36-core';

export default function AvatarTooltipExample() {
  return (
    <Stack>
      <Avatar
        src="https://images.ctfassets.net/iq4lnigp6fgt/72KhxI84kw1SE9gP8gDp7R/c5fa24bdc295a318018aea0ca46e2de8/forma-36-storybook-asset.png?fit=fill&f=top_left&w=100&h=100"
        variant="user"
        tooltipProps={{ content: 'Ada Lovelace' }}
      />

      <Avatar
        src="https://images.ctfassets.net/iq4lnigp6fgt/72KhxI84kw1SE9gP8gDp7R/c5fa24bdc295a318018aea0ca46e2de8/forma-36-storybook-asset.png?fit=fill&f=top_left&w=100&h=100"
        variant="app"
        tooltipProps={{ content: 'Awesome App', placement: 'bottom' }}
      />
    </Stack>
  );
}
