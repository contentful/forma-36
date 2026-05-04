import React from 'react';
import { AIChatHistoryEmptyState } from '../src';
import { Flex } from '@contentful/f36-core';

export default {
  title: 'Components/AIChat/AIChatHistoryEmptyState',
  component: AIChatHistoryEmptyState,
  argTypes: {
    state: {
      control: 'text',
      description: 'The current filter state to display',
    },
    title: {
      control: 'text',
      description: 'Custom title text',
    },
    description: {
      control: 'text',
      description: 'Custom description text',
    },
    className: { control: { disable: true } },
    style: { control: { disable: true } },
    testId: { control: { disable: true } },
  },
};

const Template = (args) => (
  <Flex style={{ width: '450px', height: '600px' }}>
    <AIChatHistoryEmptyState {...args} />
  </Flex>
);

export const Paused = Template.bind({});
Paused.args = {
  state: 'paused',
};

export const CustomText = Template.bind({});
CustomText.args = {
  title: 'Your history is empty',
  description: 'Start a conversation to see it appear here.',
};
