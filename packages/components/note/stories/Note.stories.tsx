import React from 'react';
import type { Meta, Story } from '@storybook/react/types-6-0';
import { Flex } from '@contentful/f36-core';
import { Paragraph, SectionHeading } from '@contentful/f36-typography';
import { Note } from '../src/Note';
import { TextLink } from '@contentful/f36-text-link';

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

export const basic: Story<any> = ({ children, ...args }) => (
  <Note {...args}>{children}</Note>
);

basic.args = {
  variant: 'primary',
  children:
    'A piece of information that is relevant to the context the user is currently in',
};

export const overview = () => (
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
      <Note withCloseButton>
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
      <Note variant="neutral" title="Short, yet succinct title" withCloseButton>
        <Paragraph>
          A piece of information that is relevant to the context the user is
          currently in. If you like it then you should put{' '}
          <TextLink> a link</TextLink> in it.
        </Paragraph>
      </Note>
    </Flex>
  </Flex>
);
