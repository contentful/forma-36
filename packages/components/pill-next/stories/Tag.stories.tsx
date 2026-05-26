import React from 'react';
import type { StoryObj, Meta } from '@storybook/react-vite';
import { SectionHeading } from '@contentful/f36-typography';
import { Badge } from '@contentful/f36-badge';
import { action } from 'storybook/actions';
import { Flex } from '@contentful/f36-core';

import { Tag } from '../src/Tag';
import type { TagInternalProps } from '../src/Tag';

export default {
  title: 'Components/Tag',
  component: Tag,
  parameters: {
    propTypes: [Tag['__docgenInfo']],
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

export const Basic: StoryObj<TagInternalProps> = {
  render: (args) => <Tag {...args} />,
  args: {
    label: 'Content type',
    variant: 'secondary',
  },
};

export const AllVariants: StoryObj<TagInternalProps> = {
  render: () => (
    <Flex flexDirection="column" gap="spacingL">
      <Flex flexDirection="column" gap="spacingS">
        <SectionHeading as="h3">Variants without badge</SectionHeading>
        <Flex flexDirection="row" gap="spacingXs">
          <Tag label="Secondary" variant="secondary" />
          <Tag label="Primary" variant="primary" />
          <Tag label="Warning" variant="warning" />
          <Tag label="Negative" variant="negative" />
        </Flex>
      </Flex>
      <Flex flexDirection="column" gap="spacingS">
        <SectionHeading as="h3">Variants with badge</SectionHeading>
        <Flex flexDirection="row" gap="spacingXs">
          <Tag
            label="Secondary"
            variant="secondary"
            badge={<Badge variant="secondary">Draft</Badge>}
          />
          <Tag
            label="Primary"
            variant="primary"
            badge={<Badge variant="primary">Published</Badge>}
          />
          <Tag
            label="Warning"
            variant="warning"
            badge={<Badge variant="warning">Restricted</Badge>}
          />
          <Tag
            label="Negative"
            variant="negative"
            badge={<Badge variant="negative">Deleted</Badge>}
          />
        </Flex>
      </Flex>
    </Flex>
  ),
};

export const WithBadge: StoryObj<TagInternalProps> = {
  render: (args) => (
    <Flex flexDirection="column" gap="spacingL">
      <Flex flexDirection="column" gap="spacingS">
        <SectionHeading as="h3">Badge between label and remove</SectionHeading>
        <Flex flexDirection="row" gap="spacingXs">
          <Tag
            label="Blog post"
            variant="secondary"
            badge={<Badge variant="secondary">Draft</Badge>}
            onRemove={args.onRemove}
          />
          <Tag
            label="Landing page"
            variant="primary"
            badge={<Badge variant="primary">Published</Badge>}
            onRemove={args.onRemove}
          />
        </Flex>
      </Flex>
      <Flex flexDirection="column" gap="spacingS">
        <SectionHeading as="h3">Badge without remove button</SectionHeading>
        <Flex flexDirection="row" gap="spacingXs">
          <Tag
            label="Category"
            variant="secondary"
            badge={<Badge variant="secondary">3 items</Badge>}
          />
        </Flex>
      </Flex>
    </Flex>
  ),
  args: {
    onRemove: action('remove'),
  },
};

export const Removable: StoryObj<TagInternalProps> = {
  render: (args) => (
    <Flex flexDirection="column" gap="spacingL">
      <Flex flexDirection="column" gap="spacingS">
        <SectionHeading as="h3">With remove button</SectionHeading>
        <Flex flexDirection="row" gap="spacingXs">
          <Tag label="Secondary" variant="secondary" onRemove={args.onRemove} />
          <Tag label="Primary" variant="primary" onRemove={args.onRemove} />
          <Tag label="Warning" variant="warning" onRemove={args.onRemove} />
          <Tag label="Negative" variant="negative" onRemove={args.onRemove} />
        </Flex>
      </Flex>
      <Flex flexDirection="column" gap="spacingS">
        <SectionHeading as="h3">Disabled remove button</SectionHeading>
        <Flex flexDirection="row" gap="spacingXs">
          <Tag
            label="Secondary"
            variant="secondary"
            onRemove={args.onRemove}
            isDisabled
          />
          <Tag
            label="Primary"
            variant="primary"
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

export const WithTooltip: StoryObj<TagInternalProps> = {
  render: (args) => (
    <Flex flexDirection="column" gap="spacingS">
      <SectionHeading as="h3">
        Leading icon with tooltip (warning/negative)
      </SectionHeading>
      <Flex flexDirection="row" gap="spacingXs">
        <Tag
          label="Restricted access"
          variant="warning"
          tooltipContent="This tag has restricted visibility"
          badge={<Badge variant="warning">Limited</Badge>}
          onRemove={args.onRemove}
        />
        <Tag
          label="Deleted tag"
          variant="negative"
          tooltipContent="This tag was deleted from the system"
          onRemove={args.onRemove}
        />
      </Flex>
    </Flex>
  ),
  args: {
    onRemove: action('remove'),
  },
};
