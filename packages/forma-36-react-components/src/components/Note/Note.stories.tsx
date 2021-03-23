import React from 'react';
import { SectionHeading } from '@contentful/f36-typography';
import { Note, NoteProps } from './Note';
import { TextLink } from '../TextLink';
import { Flex } from '@contentful/f36-core';

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
};

interface Args extends NoteProps {
  noteText?: string;
}

export const basic = ({ noteText, ...args }: Args) => (
  <Note {...args}>{noteText}</Note>
);

basic.args = {
  noteType: 'primary',
  noteText:
    'A piece of information that is relevant to the context the user is currently in',
};

export const overview = () => (
  <Flex fullWidth flexDirection="column">
    <Flex marginBottom="spacingS">
      <SectionHeading as="h3">Note primary</SectionHeading>
    </Flex>
    <Flex marginBottom="spacingM">
      <Note>
        A piece of information that is relevant to the context the user is
        currently in.
      </Note>
    </Flex>
    <Flex marginBottom="spacingM">
      <Note title="Short, yet succint title" hasCloseButton>
        A piece of information that is relevant to the context the user is
        currently in. If you like it then you should put{' '}
        <a href="https://contentful.com">a link</a> in it.
      </Note>
    </Flex>
    <Flex marginBottom="spacingS">
      <SectionHeading as="h3">Note negative</SectionHeading>
    </Flex>
    <Flex marginBottom="spacingM">
      <Note noteType={'negative'}>
        A piece of information that is relevant to the context the user is
        currently in.
      </Note>
    </Flex>
    <Flex marginBottom="spacingM">
      <Note
        noteType={'negative'}
        title="Short, yet succint title"
        hasCloseButton
      >
        Something went wrong, apparently. Please try again.{' '}
      </Note>
    </Flex>
    <Flex marginBottom="spacingS">
      <SectionHeading as="h3">Note warning</SectionHeading>
    </Flex>
    <Flex marginBottom="spacingM">
      <Note noteType={'warning'}>
        A piece of information that is relevant to the context the user is
        currently in.
      </Note>
    </Flex>
    <Flex marginBottom="spacingM">
      <Note
        noteType={'warning'}
        title="Short, yet succint title"
        hasCloseButton
      >
        A piece of information that is relevant to the context the user is
        currently in. If you like it then you should put{' '}
        <a href="https://contentful.com">a link</a> in it.
      </Note>
    </Flex>
    <Flex marginBottom="spacingS">
      <SectionHeading as="h3">Note positive</SectionHeading>
    </Flex>
    <Flex marginBottom="spacingM">
      <Note noteType={'positive'}>
        A piece of information that is relevant to the context the user is
        currently in.
      </Note>
    </Flex>
    <Note noteType={'positive'} title="Short, yet succint title" hasCloseButton>
      <Flex marginBottom="spacingXs">
        Make sure to immediately copy your new signing secret. You will not be
        able to see it again.
      </Flex>
      <TextLink>Dismiss</TextLink>
    </Note>
  </Flex>
);
