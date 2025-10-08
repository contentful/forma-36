import React from 'react';
import { Button, Notification } from '@contentful/f36-components';

export default function NotificationTitleExample() {
  return (
    <Button
      variant="secondary"
      onClick={() =>
        Notification.success('The entry is published!', { title: 'All good!' })
      }
    >
      Show notification
    </Button>
  );
}
