import React from 'react';
import { IconButton } from '@contentful/f36-button';
import { CalendarBlankIcon } from '@contentful/f36-icons-alpha';
import { Tooltip } from '@contentful/f36-tooltip';

export default function IconButtonWithTooltipExample() {
  return (
    <Tooltip content="Select the date">
      <IconButton aria-label="Calendar" icon={<CalendarBlankIcon />} />
    </Tooltip>
  );
}
