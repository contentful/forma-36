import React from 'react';
import { Button, Notification } from '@contentful/f36-components';

export default function NotificationStickyExample() {
  return (
    <Button
      variant="secondary"
      onClick={() =>
        Notification.warning(
          'This message will disappear only by clicking close button!',
          { duration: 0 },
        )
      }
    >
      Show sticky notification
    </Button>
  );
}
