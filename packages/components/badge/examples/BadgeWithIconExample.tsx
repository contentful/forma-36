import React from 'react';
import { Badge, Stack } from '@contentful/f36-components';
import { ClockIcon, EnvironmentAliasIcon } from '@contentful/f36-icons';

export default function StartIconExample() {
  return (
    <Stack>
      <Badge startIcon={<EnvironmentAliasIcon />}>Main</Badge>
      <Badge endIcon={<ClockIcon />}>Scheduled</Badge>
    </Stack>
  );
}
