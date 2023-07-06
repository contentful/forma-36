import React from 'react';
import { Avatar } from '@contentful/f36-avatar';
import { Stack } from '@contentful/f36-core';
import { CheckCircleIcon } from '@contentful/f36-icons';

export default function AvatarIconExamples() {
  return (
    <Stack>
      <Avatar
        src="https://images.ctfassets.net/iq4lnigp6fgt/2EEEk92Kiz6KxREsjBLPAN/810d5a21650d91abad12e95da4cd3beb/2021-06_Everyone_is_Welcome_here_1_.png?fit=fill&f=top_left&w=100&h=100"
        size="medium"
      />

      <Avatar
        src="https://images.ctfassets.net/iq4lnigp6fgt/2EEEk92Kiz6KxREsjBLPAN/810d5a21650d91abad12e95da4cd3beb/2021-06_Everyone_is_Welcome_here_1_.png?fit=fill&f=top_left&w=100&h=100"
        size="medium"
        icon={<CheckCircleIcon variant="positive" />}
      />
    </Stack>
  );
}
