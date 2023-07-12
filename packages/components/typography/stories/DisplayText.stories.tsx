import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Flex } from '@contentful/f36-core';
import { DisplayText } from '../src/DisplayText/DisplayText';
import { Paragraph } from '../src/Paragraph/Paragraph';

export default {
  title: 'Typography/DisplayText',
  component: DisplayText,
  parameters: {
    propTypes: [DisplayText['__docgenInfo']],
  },
  argTypes: {
    className: { control: { disable: true } },
    testId: { control: { disable: true } },
  },
} as Meta<typeof DisplayText>;

type Story = StoryObj<typeof DisplayText>;

export const Basic: Story = {
  args: {
    children: 'Display text',
  },
};

export const Overview: Story = {
  args: {
    children: 'Display text',
  },
  render: (props) => (
    <>
      <Flex alignItems="center">
        <Flex marginRight="spacingS">
          <Paragraph>36</Paragraph>
        </Flex>
        <DisplayText {...props} size="large" />
      </Flex>

      <Flex alignItems="center">
        <Flex marginRight="spacingS">
          <Paragraph>28</Paragraph>
        </Flex>
        <DisplayText {...props} size="default" />
      </Flex>
    </>
  ),
};
