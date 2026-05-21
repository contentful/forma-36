import React from 'react';
import type { StoryObj, Meta } from '@storybook/react-vite';
import { SectionHeading } from '@contentful/f36-typography';
import { Badge } from '@contentful/f36-badge';
import { action } from 'storybook/actions';
import { Flex } from '@contentful/f36-core';
import { css } from '@emotion/css';

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
    label: 'Category tag',
    variant: 'secondary',
    badge: <Badge variant="secondary">Public</Badge>,
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
            badge={<Badge variant="secondary">Public</Badge>}
          />
          <Tag
            label="Primary"
            variant="primary"
            badge={<Badge variant="primary">Active</Badge>}
          />
          <Tag
            label="Warning"
            variant="warning"
            badge={<Badge variant="warning">Limited</Badge>}
          />
          <Tag
            label="Negative"
            variant="negative"
            badge={<Badge variant="negative">Deleted</Badge>}
          />
        </Flex>
      </Flex>
      <Flex flexDirection="column" gap="spacingS">
        <SectionHeading as="h3">Without badge</SectionHeading>
        <Flex flexDirection="row" gap="spacingXs">
          <Tag label="Secondary" variant="secondary" />
          <Tag label="Primary" variant="primary" />
          <Tag label="Warning" variant="warning" />
          <Tag label="Negative" variant="negative" />
        </Flex>
      </Flex>
    </Flex>
  ),
};

export const WithBadgeAndRemove: StoryObj<TagInternalProps> = {
  render: (args) => (
    <Flex flexDirection="column" gap="spacingL">
      <Flex flexDirection="column" gap="spacingS">
        <SectionHeading as="h3">Badge with remove button</SectionHeading>
        <Flex flexDirection="row" gap="spacingXs">
          <Tag
            label="Secondary"
            variant="secondary"
            badge={<Badge variant="secondary">Public</Badge>}
            onRemove={args.onRemove}
          />
          <Tag
            label="Primary"
            variant="primary"
            badge={<Badge variant="primary">Active</Badge>}
            onRemove={args.onRemove}
          />
          <Tag
            label="Warning"
            variant="warning"
            badge={<Badge variant="warning">Limited</Badge>}
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
            badge={<Badge variant="secondary">Public</Badge>}
            onRemove={args.onRemove}
            isDisabled
          />
          <Tag
            label="Primary"
            variant="primary"
            badge={<Badge variant="primary">Active</Badge>}
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

export const LabelTruncation: StoryObj<TagInternalProps> = {
  render: (args) => {
    const constrainedStyle = css({ maxWidth: 250 });

    return (
      <Flex flexDirection="column" gap="spacingL">
        <Flex flexDirection="column" gap="spacingS">
          <SectionHeading as="h3">
            Label truncation with badge in constrained container
          </SectionHeading>
          <Flex flexDirection="row" gap="spacingXs">
            <Tag
              label="This is a very long label that will be truncated"
              variant="secondary"
              badge={<Badge variant="secondary">Public</Badge>}
              className={constrainedStyle}
              onRemove={args.onRemove}
            />
          </Flex>
        </Flex>
      </Flex>
    );
  },
  args: {
    onRemove: action('remove'),
  },
};
