import React from 'react';
import { IconButton, Stack } from '@contentful/f36-components';
import { CalendarBlankIcon } from '@contentful/f36-icons';

export default function IconButtonExample() {
  return (
    <Stack flexDirection="column">
      <Stack>
        <IconButton
          size="small"
          variant="secondary"
          aria-label="Select the date"
          icon={<CalendarBlankIcon size="tiny" />}
        />
        <IconButton
          size="small"
          variant="secondary"
          aria-label="Select the date"
          icon={<CalendarBlankIcon size="small" />}
        />
        <IconButton
          size="medium"
          variant="secondary"
          aria-label="Select the date"
          icon={<CalendarBlankIcon size="medium" />}
        />
      </Stack>
    </Stack>
  );
}
