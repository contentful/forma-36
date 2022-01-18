import React from 'react';
import { Stack, Spinner } from '@contentful/f36-components';

export default function SpinnerSizesExample() {
  return (
    <Stack flexDirection="column">
      <Spinner size="medium" />
      <Spinner size="small" />
      <Spinner size="large" />
      <Spinner customSize={50} />
    </Stack>
  );
}
