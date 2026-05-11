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

export const TopLeftAlignment = () => {
  return (
    <Flex fullWidth flexDirection="column">
      <SectionHeading marginBottom="spacingS" as="h3">
        Top-Left Alignment Preview
      </SectionHeading>
      <Flex marginBottom="spacingL">
        <NotificationItem
          variant="positive"
          title="Long notification title that spans multiple lines to demonstrate top-left alignment"
          cta={{
            label: 'Call to Action',
          }}
          onClose={action('onClose')}
        >
          This is a longer notification body that contains multiple lines of
          text to demonstrate how all elements align to the top-left when the
          notification has both a title and content.
        </NotificationItem>
      </Flex>

      <Flex marginBottom="spacingL">
        <NotificationItem
          variant="negative"
          title="Error Title"
          cta={{
            label: 'Resolve Error',
          }}
          onClose={action('onClose')}
        >
          Short error message.
        </NotificationItem>
      </Flex>

      <Flex marginBottom="spacingL">
        <NotificationItem variant="warning" onClose={action('onClose')}>
          Notification without title - icon should still align to top-left with
          the text content.
        </NotificationItem>
      </Flex>

      <Flex marginBottom="spacingL">
        <NotificationItem
          variant="primary"
          title="Info Notification"
          onClose={action('onClose')}
        >
          This demonstrates the alignment of icon, title, content, and close
          button when all elements are present.
        </NotificationItem>
      </Flex>
    </Flex>
  );
};

TopLeftAlignment.args = {};

// Example story with multiple line blind text for the paragraph
export const MultipleLineParagraph = (args) => {
  return (
    <NotificationItem
      {...args}
      title="Notification with multiple line paragraph"
      variant="primary"
      onClose={action('onClose')}
    >
      {`Lorem ipsum dolor sit amet, consectetur adipiscing elit.
Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`}
    </NotificationItem>
  );
};

MultipleLineParagraph.args = {
  cta: {
    label: 'Learn more',
  },
  closeButtonAriaLabel: 'Close',
};
