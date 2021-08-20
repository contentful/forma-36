import React, { useState } from 'react';

import { NotificationItem, Notification } from '../src';
import type { Placement } from '../src/NotificationsManager';
import { Button, ButtonGroup } from '@contentful/f36-button';
import { action } from '@storybook/addon-actions';
import { Flex } from '@contentful/f36-core';
import { SectionHeading } from '@contentful/f36-typography';

let index = 0;
const getUniqueNumber = () => {
  index += 1;
  return index;
};

export default {
  component: NotificationItem,
  title: 'Components/Notification',
};

export const basic = (args) => {
  return <NotificationItem {...args} />;
};

basic.args = {
  title: 'Notification title',
  variant: 'positive',
  cta: {
    label: 'Notification CTA',
  },
  onClose: action('onClose'),
  children: 'Body for the notification',
};

export const WithButtons = ({ notificationText, duration, ...args }) => {
  const [placement, setPlacement] = useState<Placement>('top');
  const togglePlacement = () => {
    setPlacement(placement === 'bottom' ? 'top' : 'bottom');
  };
  return (
    <Flex fullWidth flexDirection="column">
      <SectionHeading marginBottom="spacingS" as="h3">
        Show Notification
      </SectionHeading>
      <Flex marginBottom="spacingL">
        <ButtonGroup variant="spaced" spacing="spacingM">
          <Button
            variant="positive"
            onClick={() =>
              Notification.success(`${notificationText} ${getUniqueNumber()}`, {
                duration,
              })
            }
          >
            show success
          </Button>
          <Button
            variant="negative"
            onClick={() =>
              Notification.error(`${notificationText} ${getUniqueNumber()}`, {
                duration,
              })
            }
          >
            show error
          </Button>
          <Button
            variant="secondary"
            onClick={() =>
              Notification.warning(`${notificationText} ${getUniqueNumber()}`, {
                duration,
              })
            }
          >
            show warning
          </Button>
          <Button
            variant="secondary"
            onClick={() =>
              Notification.warning('Notification that should not be repeated', {
                duration,
                id: 'some-concrete-notification',
              })
            }
          >
            show notification with the same id
          </Button>
          <Button
            variant="positive"
            onClick={() =>
              Notification.success(`${notificationText} ${getUniqueNumber()}`, {
                duration,
                ...args,
              })
            }
          >
            show notification with title and CTA
          </Button>
        </ButtonGroup>
      </Flex>
      <SectionHeading marginBottom="spacingS" as="h3">
        Actions
      </SectionHeading>
      <Flex marginBottom="spacingL">
        <ButtonGroup variant="spaced" spacing="spacingM">
          <Button
            onClick={() => {
              Notification.setPlacement(placement, { offset: 0 });
              togglePlacement();
            }}
          >
            Set Placement {placement}
          </Button>
          <Button onClick={() => Notification.closeAll()}>Close All</Button>
        </ButtonGroup>
      </Flex>
    </Flex>
  );
};

WithButtons.args = {
  title: 'Notification title',
  intent: 'success',
  cta: {
    label: 'Notification CTA',
  },
  notificationText: 'Body for the notification',
  duration: 6000,
};

export const overview = (args) => {
  return (
    <Flex fullWidth flexDirection="column">
      <SectionHeading marginBottom="spacingS" as="h3">
        Notification positive
      </SectionHeading>

      <Flex marginBottom="spacingL">
        <NotificationItem {...args} variant="positive" />
      </Flex>

      <SectionHeading as="h3" marginBottom="spacingS">
        Notification negative
      </SectionHeading>

      <Flex marginBottom="spacingL">
        <NotificationItem {...args} variant="negative" />
      </Flex>

      <SectionHeading as="h3" marginBottom="spacingS">
        Notification warning
      </SectionHeading>

      <Flex marginBottom="spacingL">
        <NotificationItem {...args} variant="warning" />
      </Flex>

      <SectionHeading as="h3" marginBottom="spacingS">
        Notification only with body
      </SectionHeading>
      <Flex marginBottom="spacingL">
        <NotificationItem variant="positive">{args.children}</NotificationItem>
      </Flex>
    </Flex>
  );
};

overview.args = {
  title: 'Notification title',
  cta: {
    label: 'Notification CTA',
  },
  onClose: action('onClose'),
  children: 'Body for the notification',
};
