import React from 'react';
import { Stack, Text, formatDateAndTime } from '@contentful/f36-components';

export default function DifferentFormatsExample() {
  return (
    <Stack flexDirection="column">
      {/* With `day` format */}
      <Text>{formatDateAndTime('2021-08-17T15:45', 'day')}</Text>
      {/* With `time` format */}
      <Text>{formatDateAndTime('2021-08-17T15:45', 'time')}</Text>
      {/* With `weekday` format */}
      <Text>{formatDateAndTime('2021-08-17T15:45', 'weekday')}</Text>
    </Stack>
  );
}
