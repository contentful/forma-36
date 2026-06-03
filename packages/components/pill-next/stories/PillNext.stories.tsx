import React from 'react';
import type { StoryObj, Meta } from '@storybook/react-vite';
import { SectionHeading } from '@contentful/f36-typography';
import { action } from 'storybook/actions';
import { Flex } from '@contentful/f36-core';
import { XIcon, PlusIcon, DotsThreeIcon } from '@contentful/f36-icons';

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

export const ActionIcons: StoryObj<PillNextInternalProps> = {
  render: () => (
    <Flex flexDirection="column" gap="spacingL">
      <Flex flexDirection="column" gap="spacingS">
        <SectionHeading as="h3">
          Flexible action icon slot — remove (X)
        </SectionHeading>
        <Flex flexDirection="row" gap="spacingXs">
          <PillNext
            label="Secondary"
            variant="secondary"
            actionIcon={<XIcon />}
            onAction={action('remove')}
            actionButtonLabel="Remove"
          />
          <PillNext
            label="Primary"
            variant="primary"
            actionIcon={<XIcon />}
            onAction={action('remove')}
            actionButtonLabel="Remove"
          />
          <PillNext
            label="Warning"
            variant="warning"
            actionIcon={<XIcon />}
            onAction={action('remove')}
            actionButtonLabel="Remove"
          />
          <PillNext
            label="Negative"
            variant="negative"
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
          <PillNext
            label="Add concept"
            variant="secondary"
            actionIcon={<PlusIcon />}
            onAction={action('add')}
            actionButtonLabel="Add"
          />
          <PillNext
            label="Assign tag"
            variant="primary"
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
          <PillNext
            label="Concept A"
            variant="primary"
            actionIcon={<DotsThreeIcon />}
            onAction={action('open-menu')}
            actionButtonLabel="Open menu"
          />
          <PillNext
            label="Concept B"
            variant="secondary"
            actionIcon={<DotsThreeIcon />}
            onAction={action('open-menu')}
            actionButtonLabel="Open menu"
          />
        </Flex>
      </Flex>
      <Flex flexDirection="column" gap="spacingS">
        <SectionHeading as="h3">Disabled state</SectionHeading>
        <Flex flexDirection="row" gap="spacingXs">
          <PillNext
            label="Disabled remove"
            variant="secondary"
            actionIcon={<XIcon />}
            onAction={action('remove')}
            actionButtonLabel="Remove"
            isDisabled
          />
          <PillNext
            label="Disabled add"
            variant="primary"
            actionIcon={<PlusIcon />}
            onAction={action('add')}
            actionButtonLabel="Add"
            isDisabled
          />
          <PillNext
            label="Disabled menu"
            variant="primary"
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

export const LongLabels: StoryObj<PillNextInternalProps> = {
  render: (args) => (
    <Flex flexDirection="column" gap="spacingL">
      <Flex flexDirection="column" gap="spacingS">
        <SectionHeading as="h3">
          Wide container — long pill fits on one line
        </SectionHeading>
        <Flex
          flexDirection="column"
          alignItems="flex-start"
          gap="spacingXs"
          style={{ width: '800px', border: '1px dashed #ccc', padding: '16px' }}
        >
          <PillNext
            label="Vewkjsdhfkjsdhf kdsjhfdskjfhdskjfhdskjfhdskjfh sdkfjhsdkfh sdkfjhsdkfjh sdkfjhsdkfjh sdkfjhsdkfjh"
            variant="secondary"
            onRemove={args.onRemove}
          />
          <PillNext
            label="Short label"
            variant="secondary"
            onRemove={args.onRemove}
          />
        </Flex>
      </Flex>

      <Flex flexDirection="column" gap="spacingS">
        <SectionHeading as="h3">
          Narrower container — long pill wraps to two lines
        </SectionHeading>
        <Flex
          flexDirection="column"
          alignItems="flex-start"
          gap="spacingXs"
          style={{ width: '550px', border: '1px dashed #ccc', padding: '16px' }}
        >
          <PillNext
            label="Vewkjsdhfkjsdhf kdsjhfdskjfhdskjfhdskjfhdskjfh sdkfjhsdkfh sdkfjhsdkfjh sdkfjhsdkfjh sdkfjhsdkfjh"
            variant="secondary"
            onRemove={args.onRemove}
          />
          <PillNext
            label="fefhjejhfehufheuhfuehfuewdwhudhwuhduwhduehfuheufheufheuf euhfuehfuheufhuehfuheufheufhuehfuheufheufheuhf"
            variant="warning"
            tooltipContent="This tag has restricted visibility"
            onRemove={args.onRemove}
          />
          <PillNext
            label="Negative variant with a long label that wraps to verify leading icon alignment with the remove button"
            variant="negative"
            tooltipContent="This tag was deleted"
            onRemove={args.onRemove}
          />
          <PillNext
            label="Short label"
            variant="secondary"
            onRemove={args.onRemove}
          />
        </Flex>
      </Flex>

      <Flex flexDirection="column" gap="spacingS">
        <SectionHeading as="h3">
          Row flex-wrap container — pills should wrap text, not overflow
        </SectionHeading>
        <Flex
          flexDirection="row"
          flexWrap="wrap"
          gap="spacingXs"
          style={{ width: '550px', border: '1px dashed #ccc', padding: '16px' }}
        >
          <PillNext
            label="Short label"
            variant="secondary"
            onRemove={args.onRemove}
          />
          <PillNext
            label="Vewkjsdhfkjsdhf kdsjhfdskjfhdskjfhdskjfhdskjfh sdkfjhsdkfh sdkfjhsdkfjh sdkfjhsdkfjh sdkfjhsdkfjh"
            variant="secondary"
            onRemove={args.onRemove}
          />
          <PillNext
            label="Another short one"
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
