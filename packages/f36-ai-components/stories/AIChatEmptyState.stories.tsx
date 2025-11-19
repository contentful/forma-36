import React from 'react';
import {
  AIChatEmptyState,
  ChatEmptyStateSuggestion,
} from '../src/AIChatEmptyState';
import { Flex } from '@contentful/f36-core';
import {
  DeviceMobileCameraIcon,
  ListBulletsIcon,
  UsersIcon,
} from '@contentful/f36-icons';

export default {
  title: 'Components/AIChat/AIChatEmptyState',
  component: AIChatEmptyState,
  argTypes: {
    welcomeMessage: { control: 'text' },
    suggestions: { control: 'array' },
    onSuggestionClick: { action: 'suggestion clicked' },
  },
};

const defaultSuggestions: ChatEmptyStateSuggestion[] = [
  {
    id: '1',
    icon: DeviceMobileCameraIcon,
    text: 'How many mobile visitors do we have?',
  },
  {
    id: '2',
    icon: UsersIcon,
    text: 'What is the count of users accessing our site?',
  },
  {
    id: '3',
    icon: ListBulletsIcon,
    text: 'Can you provide statistics on visitor traffic?',
  },
];

const render = (args) => (
  <Flex style={{ width: '450px' }}>
    <AIChatEmptyState {...args} />
  </Flex>
);

export const Default = (args) => render(args);

Default.args = {
  welcomeMessage: 'How can I assist you today?',
  suggestions: defaultSuggestions,
};
