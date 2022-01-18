import React from 'react';
import { Stack, Spinner } from '@contentful/f36-components';

export default function SpinnerVariantsExample() {
  return (
    <Stack flexDirection="column">
      <Spinner variant="default" />
      <Spinner variant="primary" />
      <div style={{ background: 'black', padding: '5px' }}>
        <Spinner variant="white" />
      </div>
    </Stack>
  );
}
