import React from 'react';
import { Button, Notification, Stack } from '@contentful/f36-components';

export default function NotificationIntentsExample() {
  return (
    <Stack justifyContent="center" flexWrap="wrap">
      <Button
        variant="positive"
        onClick={() => Notification.success('This is a success notification')}
      >
        Show success notification
      </Button>
      <Button
        variant="negative"
        onClick={() => Notification.error('This is an error notification')}
      >
        Show error notification
      </Button>
      <Button
        variant="secondary"
        onClick={() => Notification.warning('This is a warning notification')}
      >
        Show warning notification
      </Button>
      <Button
        variant="primary"
        onClick={() => Notification.info('This is an info notification')}
      >
        Show info notification
      </Button>
    </Stack>
  );
}
