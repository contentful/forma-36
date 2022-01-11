import React from 'react';
import { Stack, Text, formatDateAndTime } from '@contentful/f36-components';

export default function DifferentFormatsExample() {
  return (
    <Stack flexDirection="column">
      {/* With `fullWithSeconds` format */}
      <Text>{formatDateAndTime('2021-08-17T15:45:34', 'fullWithSeconds')}</Text>
      {/* With `day` format */}
      <Text>{formatDateAndTime('2021-08-17T15:45:34', 'day')}</Text>
      {/* With `time` format */}
      <Text>{formatDateAndTime('2021-08-17T15:45:34', 'time')}</Text>
      {/* With `weekday` format */}
      <Text>{formatDateAndTime('2021-08-17T15:45:34', 'weekday')}</Text>
    </Stack>
  );
}
