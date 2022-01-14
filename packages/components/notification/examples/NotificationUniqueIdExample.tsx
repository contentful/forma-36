import React from 'react';
import { Button, Notification } from '@contentful/f36-components';

export default function NotificationUniqueIdExample() {
  // Try clicking on the button several times
  return (
    <Button
      variant="secondary"
      onClick={() =>
        Notification.error('System error!', { id: 'system-error' })
      }
    >
      Show unique notification
    </Button>
  );
}
