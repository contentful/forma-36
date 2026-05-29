import React from 'react';
import type { StoryObj, Meta } from '@storybook/react-vite';
import { SectionHeading } from '@contentful/f36-typography';
import { action } from 'storybook/actions';
import { Flex } from '@contentful/f36-core';

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

export const Removable: StoryObj<AiPillProps> = {
  render: (args) => (
    <Flex flexDirection="column" gap="spacingL">
      <Flex flexDirection="column" gap="spacingS">
        <SectionHeading as="h3">With remove button</SectionHeading>
        <Flex flexDirection="row" gap="spacingXs">
          <AiPill label="Machine learning" onRemove={args.onRemove} />
          <AiPill label="Data science" onRemove={args.onRemove} />
          <AiPill label="Neural networks" onRemove={args.onRemove} />
        </Flex>
      </Flex>
      <Flex flexDirection="column" gap="spacingS">
        <SectionHeading as="h3">Disabled remove button</SectionHeading>
        <Flex flexDirection="row" gap="spacingXs">
          <AiPill
            label="Machine learning"
            onRemove={args.onRemove}
            isDisabled
          />
          <AiPill label="Data science" onRemove={args.onRemove} isDisabled />
        </Flex>
      </Flex>
    </Flex>
  ),
  args: {
    onRemove: action('remove'),
  },
};

export const WithoutRemove: StoryObj<AiPillProps> = {
  render: () => (
    <Flex flexDirection="row" gap="spacingXs">
      <AiPill label="Suggested category" />
      <AiPill label="Auto-tagged" />
    </Flex>
  ),
};
