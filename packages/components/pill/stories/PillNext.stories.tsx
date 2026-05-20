import React from 'react';
import type { StoryObj, Meta } from '@storybook/react-vite';
import { SectionHeading } from '@contentful/f36-typography';
import { action } from 'storybook/actions';
import { Flex } from '@contentful/f36-core';
import { css } from '@emotion/css';

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
    isRemoveDisabled: { control: { type: 'boolean' } },
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
            isRemoveDisabled
          />
          <PillNext
            label="Primary"
            variant="primary"
            onRemove={args.onRemove}
            isRemoveDisabled
          />
          <PillNext
            label="Warning"
            variant="warning"
            onRemove={args.onRemove}
            isRemoveDisabled
          />
          <PillNext
            label="Negative"
            variant="negative"
            onRemove={args.onRemove}
            isRemoveDisabled
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

export const LabelTruncation: StoryObj<PillNextInternalProps> = {
  render: (args) => {
    const constrainedStyle = css({ maxWidth: 200 });

    return (
      <Flex flexDirection="column" gap="spacingL">
        <Flex flexDirection="column" gap="spacingS">
          <SectionHeading as="h3">
            Label truncation in constrained container
          </SectionHeading>
          <Flex flexDirection="row" gap="spacingXs">
            <PillNext
              label="This is a very long label that will be truncated"
              variant="secondary"
              className={constrainedStyle}
              onRemove={args.onRemove}
            />
            <PillNext
              label="Another long label that overflows its container"
              variant="primary"
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
