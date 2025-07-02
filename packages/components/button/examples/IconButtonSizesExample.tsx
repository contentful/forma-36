import React from 'react';
import { IconButton } from '@contentful/f36-button';
import { CalendarBlankIcon } from '@contentful/f36-icons';

export default function IconButtonSizesExample() {
  return (
    <>
      <IconButton
        aria-label="Calendar"
        icon={<CalendarBlankIcon />}
        size="small"
      />
      <IconButton
        aria-label="Calendar"
        icon={<CalendarBlankIcon />}
        size="medium"
      />
      <IconButton
        aria-label="Calendar"
        icon={<CalendarBlankIcon />}
        size="large"
      />
    </>
  );
}
