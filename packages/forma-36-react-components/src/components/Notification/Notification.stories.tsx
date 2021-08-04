import React from 'react';
import { SectionHeading } from '@contentful/f36-typography';
import { Button, ButtonGroup } from '@contentful/f36-button';
import { Notification, NotificationsAPI } from './Notification';
import { NotificationItem } from './NotificationItem';
import { Flex } from '@contentful/f36-core';

let index = 0;
const getUniqueNumber = () => {
  index += 1;
  return index;
};

export default {
  title: 'Components/Notification',
  component: Notification,
  parameters: {
    propTypes: [Notification['__docgenInfo']],
  },
  argTypes: {
    className: { control: { disable: true } },
    testId: { control: { disable: true } },
  },
};

interface Args extends NotificationsAPI {
  notificationText?: string;
}

export const basic = ({ notificationText, ...args }: Args) => (
  <NotificationItem {...args}>{notificationText}</NotificationItem>
);

basic.args = {
  title: 'Notification title',
  intent: 'success',
  cta: {
    label: 'Notification CTA',
  },
  notificationText: 'Body for the notification',
};

interface WithButtonArgs extends NotificationsAPI {
  notificationText?: string;
  duration?: number;
}

export const withButtons = ({
  notificationText,
  duration,
  ...args
}: WithButtonArgs) => (
  <ButtonGroup variant="spaced" spacing="spacingM">
    <Button
      variant="positive"
      onClick={() =>
        Notification.success(`${notificationText} ${getUniqueNumber()}`, {
          duration: duration,
        })
      }
    >
      show success
    </Button>
    <Button
      variant="negative"
      onClick={() =>
        Notification.error(`${notificationText} ${getUniqueNumber()}`, {
          duration: duration,
        })
      }
    >
      show error
    </Button>
    <Button
      variant="transparent"
      onClick={() =>
        Notification.warning(`${notificationText} ${getUniqueNumber()}`, {
          duration: duration,
        })
      }
    >
      show warning
    </Button>
    <Button
      variant="transparent"
      onClick={() =>
        Notification.warning('Notification that should not be repeated', {
          duration: duration,
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
          duration: duration,
          ...args,
        })
      }
    >
      show notification with title and CTA
    </Button>
  </ButtonGroup>
);

withButtons.args = {
  title: 'Notification title',
  intent: 'success',
  cta: {
    label: 'Notification CTA',
  },
  notificationText: 'Body for the notification',
  duration: 6000,
};

interface OverviewArgs extends NotificationsAPI {
  notificationText?: string;
}

export const overview = ({ notificationText, ...args }: OverviewArgs) => (
  <Flex fullWidth flexDirection="column">
    <Flex marginBottom="spacingS">
      <SectionHeading as="h3">Notifiaction success</SectionHeading>
    </Flex>
    <Flex marginBottom="spacingS">
      <NotificationItem {...args} intent="success">
        {notificationText}
      </NotificationItem>
    </Flex>
    <Flex marginBottom="spacingS">
      <SectionHeading as="h3">Notifiaction error</SectionHeading>
    </Flex>
    <Flex marginBottom="spacingS">
      <NotificationItem {...args} intent="error">
        {notificationText}
      </NotificationItem>
    </Flex>
    <Flex marginBottom="spacingS">
      <SectionHeading as="h3">Notifiaction warning</SectionHeading>
    </Flex>
    <Flex marginBottom="spacingS">
      <NotificationItem {...args} intent="warning">
        {notificationText}
      </NotificationItem>
    </Flex>
    <Flex marginBottom="spacingS">
      <SectionHeading as="h3">
        Notifiaction warning only with body
      </SectionHeading>
    </Flex>
    <Flex marginBottom="spacingS">
      <NotificationItem intent="warning">{notificationText}</NotificationItem>
    </Flex>
  </Flex>
);

overview.args = {
  title: 'Notification title',
  cta: {
    label: 'Notification CTA',
  },
  notificationText: 'Body for the notification',
};
