import React from 'react';
import {
  AIChatConversationEmptyState,
  AIChatSuggestionList,
  ChatEmptyStateSuggestion,
  getAIIconGradientStyles,
  PrimaryIconGradient,
} from '../src';
import { Flex } from '@contentful/f36-core';
import {
  DeviceMobileCameraIcon,
  ListBulletsIcon,
  SparkleFilledIcon,
  UsersIcon,
  BuildingIcon,
} from '@contentful/f36-icons';
import { css, cx } from '@emotion/css';

const { primaryGradientIconStyle } = getAIIconGradientStyles();

const sparkleIconWrapperStyle = css({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  '& svg': {
    width: '48px',
    height: '48px',
  },
});

const SparkleIcon = () => (
  <>
    <PrimaryIconGradient />
    <span className={cx(primaryGradientIconStyle, sparkleIconWrapperStyle)}>
      <SparkleFilledIcon size="medium" />
    </span>
  </>
);

export default {
  title: 'Components/AIChat/AIChatConversationEmptyState',
  component: AIChatConversationEmptyState,
};

const defaultSuggestions: ChatEmptyStateSuggestion[] = [
  {
    icon: DeviceMobileCameraIcon,
    text: 'How many mobile visitors do we have?',
    description:
      'Get insights on the number of users accessing your site via mobile devices.',
  },
  {
    icon: UsersIcon,
    text: 'What is the count of users accessing our site?',
    description:
      'Discover the total number of unique users visiting your website.',
  },
  {
    icon: ListBulletsIcon,
    text: 'Can you provide statistics on visitor traffic?',
    description:
      'Analyze the flow of visitors to your site and understand their behavior.',
  },
  {
    icon: BuildingIcon,
    text: 'What are the top 5 pages visited on our site?',
    description: 'Identify the most popular pages on your website.',
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
  description: 'Choose a suggestion or start typing your question below.',
  icon: <SparkleIcon />,
  suggestions: defaultSuggestions,
  onSelect: (suggestion) => console.log('Selected:', suggestion),
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  title: 'Create experiences with AI',
  description:
    'The experience generation agent helps you find the right components, fragments, and content to build on-brand experiences.',
  icon: <SparkleIcon />,
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
