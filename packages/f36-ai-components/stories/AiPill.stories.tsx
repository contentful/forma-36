import React from 'react';
import type { StoryObj, Meta } from '@storybook/react-vite';
import { SectionHeading } from '@contentful/f36-typography';
import { action } from 'storybook/actions';
import { Flex } from '@contentful/f36-core';
import { PlusIcon, XIcon } from '@contentful/f36-icons';

import { AiPill } from '../src/AiPill';
import type { AiPillProps } from '../src/AiPill';

export default {
  title: 'AI/AiPill',
  component: AiPill,
  argTypes: {
    label: { control: { type: 'text' } },
    isDisabled: { control: { type: 'boolean' } },
    className: { control: { disable: true } },
    testId: { control: { disable: true } },
  },
} as Meta;

export const Basic: StoryObj<AiPillProps> = {
  render: (args) => <AiPill {...args} />,
  args: {
    label: 'AI suggested tag',
  },
};

export const WithRemoveIcon: StoryObj<AiPillProps> = {
  render: () => (
    <Flex flexDirection="column" gap="spacingL">
      <Flex flexDirection="column" gap="spacingS">
        <SectionHeading as="h3">Dismiss action (XIcon)</SectionHeading>
        <Flex flexDirection="row" gap="spacingXs">
          <AiPill
            label="Machine learning"
            actionIcon={<XIcon />}
            onAction={action('dismiss')}
            actionButtonLabel="Dismiss Machine learning"
          />
          <AiPill
            label="Data science"
            actionIcon={<XIcon />}
            onAction={action('dismiss')}
            actionButtonLabel="Dismiss Data science"
          />
          <AiPill
            label="Neural networks"
            actionIcon={<XIcon />}
            onAction={action('dismiss')}
            actionButtonLabel="Dismiss Neural networks"
          />
        </Flex>
      </Flex>
      <Flex flexDirection="column" gap="spacingS">
        <SectionHeading as="h3">Disabled</SectionHeading>
        <Flex flexDirection="row" gap="spacingXs">
          <AiPill
            label="Machine learning"
            actionIcon={<XIcon />}
            onAction={action('dismiss')}
            actionButtonLabel="Dismiss"
            isDisabled
          />
          <AiPill
            label="Data science"
            actionIcon={<XIcon />}
            onAction={action('dismiss')}
            actionButtonLabel="Dismiss"
            isDisabled
          />
        </Flex>
      </Flex>
    </Flex>
  ),
};

export const WithAddIcon: StoryObj<AiPillProps> = {
  render: () => (
    <Flex flexDirection="column" gap="spacingL">
      <Flex flexDirection="column" gap="spacingS">
        <SectionHeading as="h3">Add action (PlusIcon)</SectionHeading>
        <Flex flexDirection="row" gap="spacingXs">
          <AiPill
            label="Machine learning"
            actionIcon={<PlusIcon />}
            onAction={action('add')}
            actionButtonLabel="Add Machine learning suggestion"
          />
          <AiPill
            label="Data science"
            actionIcon={<PlusIcon />}
            onAction={action('add')}
            actionButtonLabel="Add Data science suggestion"
          />
          <AiPill
            label="Neural networks"
            actionIcon={<PlusIcon />}
            onAction={action('add')}
            actionButtonLabel="Add Neural networks suggestion"
          />
        </Flex>
      </Flex>
      <Flex flexDirection="column" gap="spacingS">
        <SectionHeading as="h3">Disabled</SectionHeading>
        <Flex flexDirection="row" gap="spacingXs">
          <AiPill
            label="Machine learning"
            actionIcon={<PlusIcon />}
            onAction={action('add')}
            actionButtonLabel="Add suggestion"
            isDisabled
          />
          <AiPill
            label="Data science"
            actionIcon={<PlusIcon />}
            onAction={action('add')}
            actionButtonLabel="Add suggestion"
            isDisabled
          />
        </Flex>
      </Flex>
    </Flex>
  ),
};

export const WithoutAction: StoryObj<AiPillProps> = {
  render: () => (
    <Flex flexDirection="row" gap="spacingXs">
      <AiPill label="Suggested category" />
      <AiPill label="Auto-tagged" />
    </Flex>
  ),
};
