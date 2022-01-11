import React from 'react';
import {
  Stack,
  Text,
  formatMachineReadableDateTime,
} from '@contentful/f36-components';

export default function DifferentFormatMachineReadableDateTimeExample() {
  return (
    <Stack flexDirection="column">
      {/* With `day` format */}
      <Text>{formatMachineReadableDateTime('2021-08-17T15:45', 'day')}</Text>
      {/* With `time` format */}
      <Text>{formatMachineReadableDateTime('2021-08-17T15:45', 'time')}</Text>
      {/* With `weekday` format */}
      <Text>
        {formatMachineReadableDateTime('2021-08-17T15:45', 'weekday')}
      </Text>
    </Stack>
  );
}
