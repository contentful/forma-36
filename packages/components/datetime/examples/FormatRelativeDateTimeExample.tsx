import React from 'react';
import {
  Stack,
  Text,
  formatRelativeDateTime,
} from '@contentful/f36-components';

export default function FormatRelativeDateTimeExample() {
  return (
    <Stack flexDirection="column">
      {/* passing a Date */}
      <Text>{formatRelativeDateTime('2021-08-17')}</Text>
      {/* passing a base date to compare to */}
      <Text>{formatRelativeDateTime('2021-08-17', '2021-08-18')}</Text>
    </Stack>
  );
}
