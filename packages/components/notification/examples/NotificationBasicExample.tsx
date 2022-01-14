import React from 'react';
import { Button, Notification } from '@contentful/f36-components';

export default function NotificationBasicExample() {
  return (
    <Button
      variant="secondary"
      onClick={() => Notification.success('The entry is published!')}
    >
      Show notification
    </Button>
  );
}
