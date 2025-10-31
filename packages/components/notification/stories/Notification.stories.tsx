import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { NotificationItem, Notification } from '../src';
import type { Placement } from '../src/NotificationsManager';
import { Button, ButtonGroup } from '@contentful/f36-button';
import { action } from 'storybook/actions';
import { Flex } from '@contentful/f36-core';
import { SectionHeading } from '@contentful/f36-typography';

let index = 0;
const getUniqueNumber = () => {
  index += 1;
  return index;
};

const meta: Meta<typeof NotificationItem> = {
  component: NotificationItem,
  title: 'Components/Notification',
};
export default meta;

const BasicStoryComponent: React.FC<
  (typeof Basic)['args'] & {
    duration: number;
    notificationText: string;
  }
> = (args) => {
  const [placement, setPlacement] = React.useState<Placement>('top');
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
              Notification.success(
                `${args.notificationText} ${getUniqueNumber()}`,
                {
                  duration: args.duration,
                },
              )
            }
          >
            show success
          </Button>
          <Button
            variant="negative"
            onClick={() =>
              Notification.error(
                `${args.notificationText} ${getUniqueNumber()}`,
                {
                  duration: args.duration,
                },
              )
            }
          >
            show error
          </Button>
          <Button
            variant="secondary"
            onClick={() =>
              Notification.warning(
                `${args.notificationText} ${getUniqueNumber()}`,
                {
                  duration: args.duration,
                },
              )
            }
          >
            show warning
          </Button>
          <Button
            variant="primary"
            onClick={() =>
              Notification.info(
                `${args.notificationText} ${getUniqueNumber()}`,
                {
                  duration: args.duration,
                },
              )
            }
          >
            show info
          </Button>
          <Button
            variant="secondary"
            onClick={() =>
              Notification.warning('Notification that should not be repeated', {
                duration: args.duration,
                id: 'some-concrete-notification',
              })
            }
          >
            show notification with the same id
          </Button>
          <Button
            variant="positive"
            onClick={() =>
              Notification.success(
                `${args.notificationText} ${getUniqueNumber()}`,
                {
                  duration: args.duration,
                  ...args,
                },
              )
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

export const Basic: StoryObj<typeof NotificationItem> = {
  render: (args) => {
    return <NotificationItem {...args} />;
  },
};

Basic.args = {
  title: 'Notification title',
  variant: 'positive',
  cta: {
    label: 'Notification CTA',
  },
  onClose: action('onClose'),
  children: 'Body for the notification',
  closeButtonAriaLabel: 'Close',
};

export const WithButtons: StoryObj<typeof NotificationItem> = {
  render: (args) => {
    return (
      <BasicStoryComponent
        {...args}
        duration={3000}
        notificationText="Notification"
      />
    );
  },
};

WithButtons.args = {
  title: 'Notification title',
  variant: 'positive',
  cta: {
    label: 'Notification CTA',
  },
};

export const Overview: StoryObj = {
  args: {
    title: 'Notification title',
    cta: {
      label: 'Notification CTA',
    },
    onClose: action('onClose'),
    children: 'Body for the notification',
  },
  render: (args: (typeof Overview)['args'] & { children: React.ReactNode }) => (
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
  ),
};
