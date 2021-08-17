import React from 'react';
import type { Story, Meta } from '@storybook/react/types-6-0';

import {
  NotificationItem,
  NotificationItemProps,
} from '../src/NotificationItem';
import { action } from '@storybook/addon-actions';
import { Flex } from '@contentful/f36-core';
import { SectionHeading } from '@contentful/f36-typography';

export default {
  component: NotificationItem,
  parameters: {
    propTypes: NotificationItem['__docgenInfo'],
  },
  title: 'Components/Notification/NotificationItem',
} as Meta;

export const basic: Story<NotificationItemProps> = (args) => {
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
        Notification warning only with body
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
