import React from 'react';
import type { StoryObj, Meta } from '@storybook/react-vite';
import { SectionHeading } from '@contentful/f36-typography';
import { action } from 'storybook/actions';
import { Flex } from '@contentful/f36-core';

import { PillNext } from '../src/PillNext';
import type { PillNextInternalProps } from '../src/PillNext';

export default {
  title: 'Components/PillNext',
  component: PillNext,
  parameters: {
    propTypes: [PillNext['__docgenInfo']],
  },
  argTypes: {
    label: { control: { type: 'text' } },
    variant: {
      control: { type: 'select' },
      options: ['secondary', 'primary', 'warning', 'negative'],
    },
    isDisabled: { control: { type: 'boolean' } },
    tooltipContent: { control: { type: 'text' } },
    className: { control: { disable: true } },
    testId: { control: { disable: true } },
  },
} as Meta;

export const Basic: StoryObj<PillNextInternalProps> = {
  render: (args) => <PillNext {...args} />,
  args: {
    label: 'Category tag',
    variant: 'secondary',
  },
};

export const AllVariants: StoryObj<PillNextInternalProps> = {
  render: () => (
    <Flex flexDirection="column" gap="spacingL">
      <Flex flexDirection="column" gap="spacingS">
        <SectionHeading as="h3">Variants</SectionHeading>
        <Flex flexDirection="row" gap="spacingXs">
          <PillNext label="Secondary" variant="secondary" />
          <PillNext label="Primary" variant="primary" />
          <PillNext label="Warning" variant="warning" />
          <PillNext label="Negative" variant="negative" />
        </Flex>
      </Flex>
    </Flex>
  ),
};

export const Removable: StoryObj<PillNextInternalProps> = {
  render: (args) => (
    <Flex flexDirection="column" gap="spacingL">
      <Flex flexDirection="column" gap="spacingS">
        <SectionHeading as="h3">With remove button</SectionHeading>
        <Flex flexDirection="row" gap="spacingXs">
          <PillNext
            label="Secondary"
            variant="secondary"
            onRemove={args.onRemove}
          />
          <PillNext
            label="Primary"
            variant="primary"
            onRemove={args.onRemove}
          />
          <PillNext
            label="Warning"
            variant="warning"
            onRemove={args.onRemove}
          />
          <PillNext
            label="Negative"
            variant="negative"
            onRemove={args.onRemove}
          />
        </Flex>
      </Flex>
      <Flex flexDirection="column" gap="spacingS">
        <SectionHeading as="h3">Disabled remove button</SectionHeading>
        <Flex flexDirection="row" gap="spacingXs">
          <PillNext
            label="Secondary"
            variant="secondary"
            onRemove={args.onRemove}
            isDisabled
          />
          <PillNext
            label="Primary"
            variant="primary"
            onRemove={args.onRemove}
            isDisabled
          />
          <PillNext
            label="Warning"
            variant="warning"
            onRemove={args.onRemove}
            isDisabled
          />
          <PillNext
            label="Negative"
            variant="negative"
            onRemove={args.onRemove}
            isDisabled
          />
        </Flex>
      </Flex>
    </Flex>
  ),
  args: {
    onRemove: action('remove'),
  },
};

export const WithTooltip: StoryObj<PillNextInternalProps> = {
  render: (args) => (
    <Flex flexDirection="column" gap="spacingL">
      <Flex flexDirection="column" gap="spacingS">
        <SectionHeading as="h3">
          Leading icon with tooltip (warning/negative)
        </SectionHeading>
        <Flex flexDirection="row" gap="spacingXs">
          <PillNext
            label="Restricted access"
            variant="warning"
            tooltipContent="This tag has restricted visibility"
            onRemove={args.onRemove}
          />
          <PillNext
            label="Deleted tag"
            variant="negative"
            tooltipContent="This tag was deleted from the system"
            onRemove={args.onRemove}
          />
        </Flex>
      </Flex>
    </Flex>
  ),
  args: {
    onRemove: action('remove'),
  },
};

export const LongLabels: StoryObj<PillNextInternalProps> = {
  render: (args) => (
    <Flex flexDirection="column" gap="spacingL">
      <Flex flexDirection="column" gap="spacingS">
        <SectionHeading as="h3">
          Very long labels (pill expands, border-radius stays 16px)
        </SectionHeading>
        <Flex flexDirection="column" alignItems="flex-start" gap="spacingXs">
          <PillNext
            label="fefhjejhfehufheuhfuehfuewdwhudhwuhduwhduehfuheufheufheuf"
            variant="secondary"
            onRemove={args.onRemove}
          />
          <PillNext
            label="This is an extremely long label that demonstrates the pill expanding to accommodate text without breaking the border radius"
            variant="primary"
            onRemove={args.onRemove}
          />
        </Flex>
      </Flex>
    </Flex>
  ),
  args: {
    onRemove: action('remove'),
  },
};
