import React from 'react';
import { Button, Stack } from '@contentful/f36-components';

export default function ButtonStatesExample() {
  return (
    <Stack>
      <Button isActive>Active</Button>
      <Button isDisabled>Disabled</Button>
      <Button isLoading>Loading</Button>
    </Stack>
  );
}
