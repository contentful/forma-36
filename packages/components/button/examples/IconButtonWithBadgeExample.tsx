import React from 'react';
import { IconButton } from '@contentful/f36-button';
import { CalendarBlankIcon } from '@contentful/f36-icons-alpha';
import { Badge } from '@contentful/f36-badge';

export default function IconButtonWithBadgeExample() {
  return (
    <div style={{ position: 'relative' }}>
      <IconButton aria-label="Calendar" icon={<CalendarBlankIcon />} />
      <Badge
        variant="primary"
        style={{
          position: 'absolute',
          top: '-8px',
          right: '-8px',
        }}
      >
        3
      </Badge>
    </div>
  );
}
