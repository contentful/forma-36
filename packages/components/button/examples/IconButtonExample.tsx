import React from 'react';
import { IconButton, Stack } from '@contentful/f36-components';
import { CalendarIcon } from '@contentful/f36-icons';

export default function IconButtonExample() {
  return (
    <Stack flexDirection="column">
      <Stack>
        <IconButton
          variant="secondary"
          aria-label="Select the date"
          icon={<CalendarIcon />}
        />
        <IconButton
          variant="transparent"
          aria-label="Select the date"
          icon={<CalendarIcon />}
        />
        <IconButton
          variant="primary"
          aria-label="Select the date"
          icon={<CalendarIcon />}
        />
      </Stack>
      <Stack>
        <IconButton
          size="small"
          variant="secondary"
          aria-label="Select the date"
          icon={<CalendarIcon size="tiny" />}
        />
        <IconButton
          size="small"
          variant="transparent"
          aria-label="Select the date"
          icon={<CalendarIcon size="tiny" />}
        />
        <IconButton
          size="small"
          variant="primary"
          aria-label="Select the date"
          icon={<CalendarIcon size="tiny" />}
        />
      </Stack>
    </Stack>
  );
}
