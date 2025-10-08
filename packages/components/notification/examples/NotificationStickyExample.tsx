import React from 'react';
import { Button, Notification } from '@contentful/f36-components';

export default function NotificationStickyExample() {
  return (
    <Button
      variant="secondary"
      onClick={() =>
        Notification.warning(
          'This message will be dismissed only after clicking the "Close" button!',
          { duration: 0 },
        )
      }
    >
      Show sticky notification
    </Button>
  );
}
