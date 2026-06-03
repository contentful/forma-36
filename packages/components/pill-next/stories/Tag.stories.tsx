import React from 'react';
import type { StoryObj, Meta } from '@storybook/react-vite';
import { SectionHeading } from '@contentful/f36-typography';
import { Badge } from '@contentful/f36-badge';
import { action } from 'storybook/actions';
import { Flex } from '@contentful/f36-core';
import { XIcon, PlusIcon, DotsThreeIcon } from '@contentful/f36-icons';

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

export const ActionIcons: StoryObj<TagInternalProps> = {
  render: () => (
    <Flex flexDirection="column" gap="spacingL">
      <Flex flexDirection="column" gap="spacingS">
        <SectionHeading as="h3">
          Flexible action icon slot — remove (X)
        </SectionHeading>
        <Flex flexDirection="row" gap="spacingXs">
          <Tag
            label="Secondary"
            variant="secondary"
            badge={<Badge variant="secondary">Draft</Badge>}
            actionIcon={<XIcon />}
            onAction={action('remove')}
            actionButtonLabel="Remove"
          />
          <Tag
            label="Primary"
            variant="primary"
            badge={<Badge variant="primary">Published</Badge>}
            actionIcon={<XIcon />}
            onAction={action('remove')}
            actionButtonLabel="Remove"
          />
        </Flex>
      </Flex>
      <Flex flexDirection="column" gap="spacingS">
        <SectionHeading as="h3">
          Flexible action icon slot — add (+)
        </SectionHeading>
        <Flex flexDirection="row" gap="spacingXs">
          <Tag
            label="Add concept"
            variant="secondary"
            badge={<Badge variant="secondary">New</Badge>}
            actionIcon={<PlusIcon />}
            onAction={action('add')}
            actionButtonLabel="Add"
          />
          <Tag
            label="Assign tag"
            variant="primary"
            badge={<Badge variant="primary">Active</Badge>}
            actionIcon={<PlusIcon />}
            onAction={action('add')}
            actionButtonLabel="Add"
          />
        </Flex>
      </Flex>
      <Flex flexDirection="column" gap="spacingS">
        <SectionHeading as="h3">
          Flexible action icon slot — menu (...)
        </SectionHeading>
        <Flex flexDirection="row" gap="spacingXs">
          <Tag
            label="Concept A"
            variant="primary"
            badge={<Badge variant="primary">Published</Badge>}
            actionIcon={<DotsThreeIcon />}
            onAction={action('open-menu')}
            actionButtonLabel="Open menu"
          />
          <Tag
            label="Concept B"
            variant="secondary"
            badge={<Badge variant="secondary">Draft</Badge>}
            actionIcon={<DotsThreeIcon />}
            onAction={action('open-menu')}
            actionButtonLabel="Open menu"
          />
        </Flex>
      </Flex>
      <Flex flexDirection="column" gap="spacingS">
        <SectionHeading as="h3">Disabled state</SectionHeading>
        <Flex flexDirection="row" gap="spacingXs">
          <Tag
            label="Disabled remove"
            variant="secondary"
            badge={<Badge variant="secondary">Draft</Badge>}
            actionIcon={<XIcon />}
            onAction={action('remove')}
            actionButtonLabel="Remove"
            isDisabled
          />
          <Tag
            label="Disabled add"
            variant="primary"
            badge={<Badge variant="primary">Active</Badge>}
            actionIcon={<PlusIcon />}
            onAction={action('add')}
            actionButtonLabel="Add"
            isDisabled
          />
          <Tag
            label="Disabled menu"
            variant="primary"
            badge={<Badge variant="primary">Published</Badge>}
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

export const LongLabels: StoryObj<TagInternalProps> = {
  render: (args) => (
    <Flex flexDirection="column" gap="spacingL">
      <Flex flexDirection="column" gap="spacingS">
        <SectionHeading as="h3">
          Narrower container — long tag wraps to two lines
        </SectionHeading>
        <Flex
          flexDirection="column"
          alignItems="flex-start"
          gap="spacingXs"
          style={{ width: '550px', border: '1px dashed #ccc', padding: '16px' }}
        >
          <Tag
            label="Vewkjsdhfkjsdhf kdsjhfdskjfhdskjfhdskjfhdskjfh sdkfjhsdkfh sdkfjhsdkfjh"
            variant="secondary"
            badge={<Badge variant="secondary">Draft</Badge>}
            onRemove={args.onRemove}
          />
          <Tag
            label="Warning variant with a long label that wraps to verify badge and icon alignment"
            variant="warning"
            tooltipContent="This tag has restricted visibility"
            badge={<Badge variant="warning">Limited</Badge>}
            onRemove={args.onRemove}
          />
          <Tag
            label="Short label"
            variant="primary"
            badge={<Badge variant="primary">Published</Badge>}
            onRemove={args.onRemove}
          />
        </Flex>
      </Flex>

      <Flex flexDirection="column" gap="spacingS">
        <SectionHeading as="h3">
          Row flex-wrap container — tags should wrap text, not overflow
        </SectionHeading>
        <Flex
          flexDirection="row"
          flexWrap="wrap"
          gap="spacingXs"
          style={{ width: '550px', border: '1px dashed #ccc', padding: '16px' }}
        >
          <Tag
            label="Short label"
            variant="secondary"
            badge={<Badge variant="secondary">Draft</Badge>}
            onRemove={args.onRemove}
          />
          <Tag
            label="Vewkjsdhfkjsdhf kdsjhfdskjfhdskjfhdskjfhdskjfh sdkfjhsdkfh sdkfjhsdkfjh"
            variant="secondary"
            badge={<Badge variant="primary">Published</Badge>}
            onRemove={args.onRemove}
          />
          <Tag
            label="Another short one"
            variant="primary"
            badge={<Badge variant="primary">Live</Badge>}
            onRemove={args.onRemove}
          />
        </Flex>
      </Flex>

      <Flex flexDirection="column" gap="spacingS">
        <SectionHeading as="h3">
          Row flex-wrap with tooltip variants
        </SectionHeading>
        <Flex
          flexDirection="row"
          flexWrap="wrap"
          gap="spacingXs"
          style={{ width: '550px', border: '1px dashed #ccc', padding: '16px' }}
        >
          <Tag
            label="Restricted access with a long label to test wrapping"
            variant="warning"
            tooltipContent="This tag has restricted visibility"
            badge={<Badge variant="warning">Limited</Badge>}
            onRemove={args.onRemove}
          />
          <Tag
            label="Deleted content type"
            variant="negative"
            tooltipContent="This tag was deleted"
            badge={<Badge variant="negative">Removed</Badge>}
            onRemove={args.onRemove}
          />
          <Tag
            label="Normal tag"
            variant="secondary"
            badge={<Badge variant="secondary">Draft</Badge>}
          />
        </Flex>
      </Flex>
    </Flex>
  ),
  args: {
    onRemove: action('remove'),
  },
};
