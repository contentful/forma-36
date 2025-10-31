import React from 'react';
import type { StoryObj, Meta } from '@storybook/react-vite';
import { Flex } from '@contentful/f36-core';
import { Paragraph, SectionHeading } from '@contentful/f36-typography';
import { Note } from '../src/Note';
import { TextLink } from '@contentful/f36-text-link';
import * as icons from '@contentful/f36-icons';
import { Icon } from '@contentful/f36-icon';

export default {
  title: 'Components/Note',
  component: Note,
  parameters: {
    propTypes: [Note['__docgenInfo']],
  },
  argTypes: {
    className: { control: { disable: true } },
    testId: { control: { disable: true } },
  },
} as Meta;

export const Basic: StoryObj<any> = {
  render: ({ ...args }) => (
    <Note {...args}>
      A piece of information that is relevant to the context the user is
      currently in
    </Note>
  ),

  args: {
    variant: 'primary',
  },
};

export const WithCustomIcon: StoryObj<any> = {
  render: ({ ...args }) => (
    <Flex fullWidth flexDirection="column">
      <SectionHeading as="h3" marginBottom="spacingS">
        Note with custom icon (inheriting the variant color by default)
      </SectionHeading>

      <Flex marginBottom="spacingM">
        <Note icon={<Icon as={icons['StarIcon']} />} {...args}>
          A piece of information that is relevant to the context the user is
          currently i
        </Note>
      </Flex>
    </Flex>
  ),

  args: {
    variant: 'primary',
  },

  argTypes: {
    icon: {
      control: {
        options: ['', ...Object.keys(icons)],
        type: 'select',
      },
    },
  },
};

export const Overview = () => (
  <Flex fullWidth flexDirection="column">
    <SectionHeading as="h3" marginBottom="spacingS">
      Note primary
    </SectionHeading>

    <Flex marginBottom="spacingM">
      <Note>
        A piece of information that is relevant to the context the user is
        currently in.
      </Note>
    </Flex>
    <Flex marginBottom="spacingM">
      <Note icon={<Icon as={icons.StarIcon} />}>
        A piece of information that is relevant to the context the user is
        currently in.
      </Note>
    </Flex>
    <Flex marginBottom="spacingM">
      <Note withCloseButton closeButtonAriaLabel="Schließen">
        A piece of information that is relevant to the context the user is
        currently in.
      </Note>
    </Flex>
    <Flex marginBottom="spacingM">
      <Note title="Short, yet succinct title" withCloseButton>
        <Paragraph>
          A piece of information that is relevant to the context the user is
          currently in. If you like it then you should put{' '}
          <TextLink> a link</TextLink> in it.
        </Paragraph>
      </Note>
    </Flex>

    <SectionHeading as="h3" marginBottom="spacingS">
      Note negative
    </SectionHeading>

    <Flex marginBottom="spacingM">
      <Note variant="negative">
        A piece of information that is relevant to the context the user is
        currently in.
      </Note>
    </Flex>
    <Flex marginBottom="spacingM">
      <Note variant="negative" icon={<Icon as={icons.StarIcon} />}>
        A piece of information that is relevant to the context the user is
        currently in.
      </Note>
    </Flex>

    <Flex marginBottom="spacingM">
      <Note
        title="Short, yet succinct title"
        variant="negative"
        withCloseButton
      >
        <Paragraph>
          A piece of information that is relevant to the context the user is
          currently in. If you like it then you should put{' '}
          <TextLink> a link</TextLink> in it.
        </Paragraph>
      </Note>
    </Flex>

    <SectionHeading as="h3" marginBottom="spacingS">
      Note warning
    </SectionHeading>

    <Flex marginBottom="spacingM">
      <Note variant="warning">
        A piece of information that is relevant to the context the user is
        currently in.
      </Note>
    </Flex>
    <Flex marginBottom="spacingM">
      <Note variant="warning" icon={<Icon as={icons.StarIcon} />}>
        A piece of information that is relevant to the context the user is
        currently in.
      </Note>
    </Flex>
    <Flex marginBottom="spacingM">
      <Note variant="warning" title="Short, yet succinct title" withCloseButton>
        <Paragraph>
          A piece of information that is relevant to the context the user is
          currently in. If you like it then you should put{' '}
          <TextLink> a link</TextLink> in it.
        </Paragraph>
      </Note>
    </Flex>

    <SectionHeading as="h3" marginBottom="spacingS">
      Note positive
    </SectionHeading>

    <Flex marginBottom="spacingM">
      <Note variant="positive">
        A piece of information that is relevant to the context the user is
        currently in.
      </Note>
    </Flex>
    <Flex marginBottom="spacingM">
      <Note variant="positive" icon={<Icon as={icons.StarIcon} />}>
        A piece of information that is relevant to the context the user is
        currently in.
      </Note>
    </Flex>
    <Flex marginBottom="spacingM">
      <Note
        variant="positive"
        title="Short, yet succinct title"
        withCloseButton
      >
        <Paragraph>
          A piece of information that is relevant to the context the user is
          currently in. If you like it then you should put{' '}
          <TextLink> a link</TextLink> in it.
        </Paragraph>
      </Note>
    </Flex>

    <SectionHeading as="h3" marginBottom="spacingS">
      Note neutral
    </SectionHeading>

    <Flex marginBottom="spacingM">
      <Note variant="neutral">
        A piece of information that is relevant to the context the user is
        currently in.
      </Note>
    </Flex>
    <Flex marginBottom="spacingM">
      <Note variant="neutral" icon={<Icon as={icons.StarIcon} />}>
        A piece of information that is relevant to the context the user is
        currently in.
      </Note>
    </Flex>
    <Flex marginBottom="spacingM">
      <Note variant="neutral" title="Short, yet succinct title" withCloseButton>
        <Paragraph>
          A piece of information that is relevant to the context the user is
          currently in. If you like it then you should put{' '}
          <TextLink> a link</TextLink> in it.
        </Paragraph>
      </Note>
    </Flex>

    <SectionHeading as="h3" marginBottom="spacingS">
      Note premium
    </SectionHeading>

    <Flex marginBottom="spacingM">
      <Note variant="premium">
        A piece of information that is relevant to the context the user is
        currently in.
      </Note>
    </Flex>
    <Flex marginBottom="spacingM">
      <Note variant="premium" icon={<Icon as={icons.StarIcon} />}>
        A piece of information that is relevant to the context the user is
        currently in.
      </Note>
    </Flex>
    <Flex marginBottom="spacingM">
      <Note variant="premium" title="Short, yet succinct title" withCloseButton>
        <Paragraph>
          A piece of information that is relevant to the context the user is
          currently in. If you like it then you should put{' '}
          <TextLink> a link</TextLink> in it.
        </Paragraph>
      </Note>
    </Flex>
  </Flex>
);
