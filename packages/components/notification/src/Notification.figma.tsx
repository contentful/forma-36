import React from 'react';
import figma from '@figma/code-connect';
import { NotificationItem } from './NotificationItem';

/**
 * The primary Notification API is imperative:
 *   Notification.success('body', { title: '...' })
 *   Notification.error('body')
 *   Notification.warning('body')
 *   Notification.info('body')
 *
 * NotificationItem is the declarative component that renders the
 * notification UI and maps directly to what appears on the Figma canvas.
 */

const FIGMA_URL =
  'https://www.figma.com/design/BDteZSphg3YPJTMlABQozc/Forma-36-Components?node-id=10594:6198';

figma.connect(NotificationItem, FIGMA_URL, {
  props: {
    variant: figma.enum('Type', {
      Positive: 'positive',
      Negative: 'negative',
      Warning: 'warning',
      Info: 'primary',
    }),
    title: figma.boolean('Show title', {
      true: figma.string('Title'),
      false: undefined,
    }),
    body: figma.string('Body copy'),
  },
  example: ({ variant, body, title }) => (
    <NotificationItem variant={variant} title={title} onClose={() => {}}>
      {body}
    </NotificationItem>
  ),
});
