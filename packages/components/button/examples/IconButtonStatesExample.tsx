import React from 'react';
import { IconButton } from '@contentful/f36-button';
import { CalendarBlankIcon } from '@contentful/f36-icons';

export default function IconButtonStatesExample() {
  return (
    <>
      <IconButton
        aria-label="Calendar"
        icon={<CalendarBlankIcon />}
        isDisabled
      />
      <IconButton aria-label="Calendar" icon={<CalendarBlankIcon />} isActive />
      <IconButton
        aria-label="Calendar"
        icon={<CalendarBlankIcon />}
        isLoading
      />
    </>
  );
}
