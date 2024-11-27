import React from 'react';
import { IconButton, Stack } from '@contentful/f36-components';
import { CalendarIcon } from '@contentful/f36-icons';

export default function IconButtonExample() {
  return (
    <Stack flexDirection="column">
      <Stack>
        <IconButton
          size="small"
          variant="secondary"
          aria-label="Select the date"
          icon={<CalendarIcon size="tiny" />}
        />
        <IconButton
          size="medium"
          variant="secondary"
          aria-label="Select the date"
          icon={<CalendarIcon size="tiny" />}
        />
        <IconButton
          size="large"
          variant="secondary"
          aria-label="Select the date"
          icon={<CalendarIcon size="tiny" />}
        />
      </Stack>
    </Stack>
  );
}
