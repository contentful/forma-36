import React from 'react';
import { Avatar } from '@contentful/f36-avatar';
import { Stack } from '@contentful/f36-core';
import { CheckCircleIcon } from '@contentful/f36-icons-v4';

export default function AvatarIconExamples() {
  return (
    <Stack>
      <Avatar
        src="https://images.ctfassets.net/iq4lnigp6fgt/72KhxI84kw1SE9gP8gDp7R/c5fa24bdc295a318018aea0ca46e2de8/forma-36-storybook-asset.png"
        size="medium"
      />

      <Avatar
        src="https://images.ctfassets.net/iq4lnigp6fgt/72KhxI84kw1SE9gP8gDp7R/c5fa24bdc295a318018aea0ca46e2de8/forma-36-storybook-asset.png"
        size="medium"
        icon={<CheckCircleIcon variant="positive" />}
      />
    </Stack>
  );
}
