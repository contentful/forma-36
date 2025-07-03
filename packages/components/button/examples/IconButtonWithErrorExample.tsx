import React from 'react';
import { IconButton } from '@contentful/f36-button';
import { CalendarBlankIcon } from '@contentful/f36-icons';

export default function IconButtonWithErrorExample() {
  return (
    <IconButton
      aria-label="Calendar"
      icon={<CalendarBlankIcon />}
      variant="negative"
    />
  );
}
