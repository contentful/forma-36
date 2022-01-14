import React from 'react';
import { Button, Notification, Stack } from '@contentful/f36-components';

export default function NotificationPlacementExample() {
  return (
    <Stack>
      <Button
        variant="secondary"
        onClick={() => {
          Notification.setPlacement('top');
          Notification.success('Notification message at the top');
        }}
      >
        Top notification
      </Button>
      <Button
        variant="secondary"
        onClick={() => {
          Notification.setPlacement('bottom');
          Notification.success('Notification message at the bottom');
        }}
      >
        Bottom notification
      </Button>
    </Stack>
  );
}
