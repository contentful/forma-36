import React from 'react';
import type { StoryObj, Meta } from '@storybook/react-vite';
import { SectionHeading } from '@contentful/f36-typography';
import { action } from 'storybook/actions';
import { Flex } from '@contentful/f36-core';
import { PlusIcon, XIcon, DotsThreeIcon } from '@contentful/f36-icons';

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

export const ActionIcons: StoryObj<AiPillProps> = {
  render: () => (
    <Flex flexDirection="column" gap="spacingL">
      <Flex flexDirection="column" gap="spacingS">
        <SectionHeading as="h3">
          Flexible action icon slot — dismiss (X)
        </SectionHeading>
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
        <SectionHeading as="h3">
          Flexible action icon slot — add (+)
        </SectionHeading>
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
        <SectionHeading as="h3">
          Flexible action icon slot — menu (...)
        </SectionHeading>
        <Flex flexDirection="row" gap="spacingXs">
          <AiPill
            label="Machine learning"
            actionIcon={<DotsThreeIcon />}
            onAction={action('open-menu')}
            actionButtonLabel="Open menu"
          />
          <AiPill
            label="Data science"
            actionIcon={<DotsThreeIcon />}
            onAction={action('open-menu')}
            actionButtonLabel="Open menu"
          />
        </Flex>
      </Flex>
      <Flex flexDirection="column" gap="spacingS">
        <SectionHeading as="h3">Disabled state</SectionHeading>
        <Flex flexDirection="row" gap="spacingXs">
          <AiPill
            label="Disabled dismiss"
            actionIcon={<XIcon />}
            onAction={action('dismiss')}
            actionButtonLabel="Dismiss"
            isDisabled
          />
          <AiPill
            label="Disabled add"
            actionIcon={<PlusIcon />}
            onAction={action('add')}
            actionButtonLabel="Add suggestion"
            isDisabled
          />
          <AiPill
            label="Disabled menu"
            actionIcon={<DotsThreeIcon />}
            onAction={action('open-menu')}
            actionButtonLabel="Open menu"
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
