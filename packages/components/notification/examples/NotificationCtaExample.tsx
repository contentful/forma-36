import React from 'react';
import { Button, Notification } from '@contentful/f36-components';

export default function NotificationCtaExample() {
  return (
    <Button
      variant="secondary"
      onClick={() => {
        const notification = Notification.success('The entry is published!', {
          cta: {
            label: 'Undo',
            textLinkProps: {
              variant: 'primary',
              onClick: () => {
                notification.then((item) => {
                  Notification.close(item.id);
                  console.log('undo');
                });
              },
            },
          },
        });
      }}
    >
      Show notification with CTA
    </Button>
  );
}
