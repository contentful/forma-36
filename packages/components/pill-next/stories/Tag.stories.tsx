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
    badge: <Badge variant="secondary">Draft</Badge>,
  },
};

export const AllVariants: StoryObj<TagInternalProps> = {
  render: () => (
    <Flex flexDirection="column" gap="spacingL">
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
      <Flex flexDirection="column" gap="spacingS">
        <SectionHeading as="h3">
          Badge variant does not have to match Tag variant
        </SectionHeading>
        <Flex flexDirection="row" gap="spacingXs">
          <Tag
            label="Blog post"
            variant="secondary"
            badge={<Badge variant="primary">Published</Badge>}
          />
          <Tag
            label="API reference"
            variant="primary"
            badge={<Badge variant="warning">Review</Badge>}
          />
          <Tag
            label="Migration guide"
            variant="secondary"
            badge={<Badge variant="negative">Outdated</Badge>}
          />
        </Flex>
      </Flex>
    </Flex>
  ),
};

export const Removable: StoryObj<TagInternalProps> = {
  render: (args) => (
    <Flex flexDirection="column" gap="spacingL">
      <Flex flexDirection="column" gap="spacingS">
        <SectionHeading as="h3">With remove button</SectionHeading>
        <Flex flexDirection="row" gap="spacingXs">
          <Tag
            label="Secondary"
            variant="secondary"
            badge={<Badge variant="secondary">Draft</Badge>}
            onRemove={args.onRemove}
          />
          <Tag
            label="Primary"
            variant="primary"
            badge={<Badge variant="primary">Published</Badge>}
            onRemove={args.onRemove}
          />
          <Tag
            label="Warning"
            variant="warning"
            badge={<Badge variant="warning">Restricted</Badge>}
            onRemove={args.onRemove}
          />
          <Tag
            label="Negative"
            variant="negative"
            badge={<Badge variant="negative">Deleted</Badge>}
            onRemove={args.onRemove}
          />
        </Flex>
      </Flex>
      <Flex flexDirection="column" gap="spacingS">
        <SectionHeading as="h3">Disabled remove button</SectionHeading>
        <Flex flexDirection="row" gap="spacingXs">
          <Tag
            label="Secondary"
            variant="secondary"
            badge={<Badge variant="secondary">Draft</Badge>}
            onRemove={args.onRemove}
            isDisabled
          />
          <Tag
            label="Primary"
            variant="primary"
            badge={<Badge variant="primary">Published</Badge>}
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
          badge={<Badge variant="negative">Removed</Badge>}
          onRemove={args.onRemove}
        />
      </Flex>
    </Flex>
  ),
  args: {
    onRemove: action('remove'),
  },
};
