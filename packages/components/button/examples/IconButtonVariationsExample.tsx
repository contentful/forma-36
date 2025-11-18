import React from 'react';
import { IconButton, Stack } from '@contentful/f36-components';
import { CalendarBlankIcon } from '@contentful/f36-icons';

export default function IconButtonExample() {
  return (
    <Stack flexDirection="column">
      <Stack>
        <IconButton
          variant="primary"
          aria-label="Select the date"
          icon={<CalendarBlankIcon />}
        />
        <IconButton
          variant="secondary"
          aria-label="Select the date"
          icon={<CalendarBlankIcon />}
        />
        <IconButton
          variant="positive"
          aria-label="Select the date"
          icon={<CalendarBlankIcon />}
        />
        <IconButton
          variant="negative"
          aria-label="Select the date"
          icon={<CalendarBlankIcon />}
        />
        <IconButton
          variant="transparent"
          aria-label="Select the date"
          icon={<CalendarBlankIcon />}
        />
      </Stack>
    </Stack>
  );
}
