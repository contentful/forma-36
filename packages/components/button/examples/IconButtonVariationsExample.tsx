import React from 'react';
import { IconButton } from '@contentful/f36-button';
import { CalendarBlankIcon } from '@contentful/f36-icons-alpha';

export default function IconButtonVariationsExample() {
  return (
    <>
      <IconButton
        aria-label="Calendar"
        icon={<CalendarBlankIcon />}
        variant="primary"
      />
      <IconButton
        aria-label="Calendar"
        icon={<CalendarBlankIcon />}
        variant="secondary"
      />
      <IconButton
        aria-label="Calendar"
        icon={<CalendarBlankIcon />}
        variant="positive"
      />
      <IconButton
        aria-label="Calendar"
        icon={<CalendarBlankIcon />}
        variant="negative"
      />
      <IconButton
        aria-label="Calendar"
        icon={<CalendarBlankIcon />}
        variant="transparent"
      />
    </>
  );
}
