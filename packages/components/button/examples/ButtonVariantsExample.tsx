import React from 'react';
import { Button, Stack } from '@contentful/f36-components';

export default function ButtonVariantsExample() {
  return (
    <Stack>
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="negative">Negative</Button>
      <Button variant="positive">Positive</Button>
      <Button variant="transparent">Transparent</Button>
    </Stack>
  );
}
