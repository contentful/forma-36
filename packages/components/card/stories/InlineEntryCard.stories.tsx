import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Flex } from '@contentful/f36-core';
import { SectionHeading, Text } from '@contentful/f36-typography';
import { MenuItem } from '@contentful/f36-menu';

import { InlineEntryCard } from '../src';

export default {
  argTypes: {
    as: { control: { disable: true } },
    className: { control: { disable: true } },
    style: { control: { disable: true } },
    testId: { control: { disable: true } },
  },
  component: InlineEntryCard,
  parameters: {
    propTypes: InlineEntryCard['__docgenInfo'],
  },
  title: 'Components/Card/InlineEntryCard',
} as Meta<typeof InlineEntryCard>;

type Story = StoryObj<typeof InlineEntryCard>;

export const Default: Story = {
  args: {
    actions: [
      <MenuItem key="copy">Copy</MenuItem>,
      <MenuItem key="delete">Delete</MenuItem>,
    ],
    status: 'published',
    title: 'Author: William Shakespeare',
    children: 'William Shakespeare',
  },
  render: (args) => {
    return (
      <Flex style={{ maxWidth: '600px' }}>
        <Text>
          Macbeth (/məkˈbɛθ/, full title The Tragedie of Macbeth) is a tragedy
          by <InlineEntryCard {...args} />. It is thought to have been first
          performed in 1606.[a] It dramatises the damaging physical and
          psychological effects of political ambition on those who seek power.
          Of all the plays that Shakespeare wrote during the reign of James I,
          Macbeth most clearly reflects his relationship with King James, patron
          of Shakespeare’s acting company.[1] It was first published in the
          Folio of 1623, possibly from a prompt book, and is Shakespeare’s
          shortest tragedy
        </Text>
      </Flex>
    );
  },
};

export const WithOnlyTitle: Story = {
  args: {
    actions: [
      <MenuItem key="copy">Copy</MenuItem>,
      <MenuItem key="delete">Delete</MenuItem>,
    ],
    status: 'published',
    title: 'Author: William Shakespeare',
  },
  render: (args) => {
    return (
      <Flex style={{ maxWidth: '600px' }}>
        <Text>
          Macbeth (/məkˈbɛθ/, full title The Tragedie of Macbeth) is a tragedy
          by <InlineEntryCard {...args} />. It is thought to have been first
          performed in 1606.[a] It dramatises the damaging physical and
          psychological effects of political ambition on those who seek power.
          Of all the plays that Shakespeare wrote during the reign of James I,
          Macbeth most clearly reflects his relationship with King James, patron
          of Shakespeare’s acting company.[1] It was first published in the
          Folio of 1623, possibly from a prompt book, and is Shakespeare’s
          shortest tragedy
        </Text>
      </Flex>
    );
  },
};

export const WithNoTitle: Story = {
  args: {
    actions: [
      <MenuItem key="copy">Copy</MenuItem>,
      <MenuItem key="delete">Delete</MenuItem>,
    ],
    status: 'published',
    children: 'William Shakespeare',
  },
  render: (args) => {
    return (
      <Flex style={{ maxWidth: '600px' }}>
        <Text>
          Macbeth (/məkˈbɛθ/, full title The Tragedie of Macbeth) is a tragedy
          by <InlineEntryCard {...args} />. It is thought to have been first
          performed in 1606.[a] It dramatises the damaging physical and
          psychological effects of political ambition on those who seek power.
          Of all the plays that Shakespeare wrote during the reign of James I,
          Macbeth most clearly reflects his relationship with King James, patron
          of Shakespeare’s acting company.[1] It was first published in the
          Folio of 1623, possibly from a prompt book, and is Shakespeare’s
          shortest tragedy
        </Text>
      </Flex>
    );
  },
};

export const WithLoadingState: Story = {
  args: {
    isLoading: true,
  },
  render: (args) => {
    return <InlineEntryCard {...args} />;
  },
};

export const Overview: Story = {
  render: () => {
    return (
      <>
        <Flex flexWrap="wrap">
          <Flex
            flexDirection="column"
            marginBottom="spacingM"
            marginRight="spacingM"
          >
            <SectionHeading as="h3" marginBottom="spacingS">
              Inline
            </SectionHeading>

            <InlineEntryCard
              status="published"
              title="Author: William Shakespeare"
            >
              William Shakespeare
            </InlineEntryCard>
          </Flex>

          <Flex
            flexDirection="column"
            marginBottom="spacingM"
            marginRight="spacingM"
          >
            <SectionHeading as="h3" marginBottom="spacingS">
              Hover
            </SectionHeading>

            <InlineEntryCard
              isHovered
              status="archived"
              title="Author: William Shakespeare"
            >
              William Shakespeare
            </InlineEntryCard>
          </Flex>

          <Flex
            flexDirection="column"
            marginBottom="spacingM"
            marginRight="spacingM"
          >
            <SectionHeading as="h3" marginBottom="spacingS">
              Selected
            </SectionHeading>

            <InlineEntryCard
              isSelected
              status="deleted"
              title="Author: William Shakespeare"
            >
              William Shakespeare
            </InlineEntryCard>
          </Flex>
        </Flex>
      </>
    );
  },
};
