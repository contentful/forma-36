import React from 'react';
import { Avatar, Stack } from '@contentful/f36-components';

export default function AvatarActiveExample() {
  return (
    <Stack>
      <Avatar
        src="https://images.ctfassets.net/iq4lnigp6fgt/72KhxI84kw1SE9gP8gDp7R/c5fa24bdc295a318018aea0ca46e2de8/forma-36-storybook-asset.png?fit=fill&f=top_left&w=100&h=100"
        size="medium"
      />

      <Avatar
        src="https://images.ctfassets.net/iq4lnigp6fgt/72KhxI84kw1SE9gP8gDp7R/c5fa24bdc295a318018aea0ca46e2de8/forma-36-storybook-asset.png?fit=fill&f=top_left&w=100&h=100"
        size="medium"
        colorVariant="muted"
      />
    </Stack>
  );
}
