import React from 'react';
import {
  Stack,
  Text,
  formatMachineReadableDateTime,
} from '@contentful/f36-components';

export default function FormatMachineReadableDateTimeExample() {
  return (
    <Stack flexDirection="column">
      {/* passing a Timestamp as an ISOString */}
      <Text>{formatMachineReadableDateTime('2021-08-17T15:45')}</Text>
      {/* passing a JS Date */}
      <Text>{formatMachineReadableDateTime(new Date())}</Text>
      {/* passing a Unix Epoch in milliseconds */}
      <Text>{formatMachineReadableDateTime(1629240300000)}</Text>
    </Stack>
  );
}
