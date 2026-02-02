import React from 'react';
import {
  AIChatConversationEmptyState,
  AIChatSuggestionList,
  ChatEmptyStateSuggestion,
} from '../src';
import { Flex } from '@contentful/f36-core';
import {
  DeviceMobileCameraIcon,
  ListBulletsIcon,
  UsersIcon,
} from '@contentful/f36-icons';

export default {
  title: 'Components/AIChat/AIChatConversationEmptyState',
  component: AIChatConversationEmptyState,
};

const defaultSuggestions: ChatEmptyStateSuggestion[] = [
  {
    icon: DeviceMobileCameraIcon,
    text: 'How many mobile visitors do we have?',
  },
  {
    icon: UsersIcon,
    text: 'What is the count of users accessing our site?',
  },
  {
    icon: ListBulletsIcon,
    text: 'Can you provide statistics on visitor traffic?',
  },
];

const Template = (args) => (
  <Flex style={{ width: '450px' }}>
    <AIChatConversationEmptyState {...args}>
      <AIChatSuggestionList
        suggestions={args.suggestions}
        onSelect={args.onSelect}
      />
    </AIChatConversationEmptyState>
  </Flex>
);

export const Default = Template.bind({});
Default.args = {
  title: 'How can I assist you today?',
  description: 'Ask me anything about your analytics',
  suggestions: defaultSuggestions,
  onSelect: (suggestion) => console.log('Selected:', suggestion),
};

export const WithoutDescription = Template.bind({});
WithoutDescription.args = {
  title: 'How can I help?',
  suggestions: defaultSuggestions,
  onSelect: (suggestion) => console.log('Selected:', suggestion),
};

export const WithoutSuggestions = (args) => (
  <Flex style={{ width: '450px' }}>
    <AIChatConversationEmptyState {...args} />
  </Flex>
);
WithoutSuggestions.args = {
  title: 'How can I assist you today?',
  description: 'Start typing your question below',
};
