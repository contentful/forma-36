import React from 'react';
import { Stack, Text, formatDateAndTime } from '@contentful/f36-components';

export default function FormatDateAndTimeExample() {
  return (
    <Stack flexDirection="column">
      {/* passing a Timestamp as an ISOString */}
      <Text>{formatDateAndTime('2021-08-17T15:45')}</Text>
      {/* passing a JS Date */}
      <Text>{formatDateAndTime(new Date())}</Text>
      {/* passing a Unix Epoch in milliseconds */}
      <Text>{formatDateAndTime(1629240300000)}</Text>
    </Stack>
  );
}
