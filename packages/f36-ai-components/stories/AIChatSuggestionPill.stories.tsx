import { Flex } from '@contentful/f36-components';
import {
  ChartLineIcon,
  ChatIcon,
  CodeSimpleIcon,
  DeviceMobileCameraIcon,
} from '@contentful/f36-icons';
import { action } from '@storybook/addon-actions';
import React from 'react';
import {
  AIChatSuggestionPill,
  AIChatSuggestionPillProps,
} from '../src/AIChatSuggestionPill';

export default {
  title: 'Components/AIChat/AIChatSuggestionPill',
  component: AIChatSuggestionPill,
  argTypes: {
    text: { control: 'text' },
    isActive: { control: 'boolean' },
    icon: { control: false },
    onClick: { action: 'clicked' },
  },
};

export const Default = (args: AIChatSuggestionPillProps) => (
  <AIChatSuggestionPill {...args} />
);

Default.args = {
  icon: DeviceMobileCameraIcon,
  text: 'How many mobile visitors do we have?',
  isActive: false,
  onClick: action('Pill clicked'),
};

export const Active = (args: AIChatSuggestionPillProps) => (
  <AIChatSuggestionPill {...args} />
);

Active.args = {
  icon: DeviceMobileCameraIcon,
  text: 'How many mobile visitors do we have?',
  isActive: true,
  onClick: action('Pill clicked'),
};

export const WithDifferentIcons = () => (
  <Flex gap="spacingS" flexWrap="wrap">
    <AIChatSuggestionPill
      icon={DeviceMobileCameraIcon}
      text="Search for content"
      onClick={action('Search clicked')}
    />
    <AIChatSuggestionPill
      icon={ChartLineIcon}
      text="Show analytics"
      onClick={action('Analytics clicked')}
    />
    <AIChatSuggestionPill
      icon={ChatIcon}
      text="Start a conversation"
      onClick={action('Conversation clicked')}
    />
    <AIChatSuggestionPill
      icon={CodeSimpleIcon}
      text="Generate code"
      onClick={action('Code clicked')}
    />
  </Flex>
);

export const ActiveAndInactive = () => (
  <Flex gap="spacingS" flexWrap="wrap">
    <AIChatSuggestionPill
      icon={DeviceMobileCameraIcon}
      text="Active suggestion"
      isActive={true}
      onClick={action('Active clicked')}
    />
    <AIChatSuggestionPill
      icon={ChartLineIcon}
      text="Inactive suggestion"
      isActive={false}
      onClick={action('Inactive clicked')}
    />
  </Flex>
);

export const LongText = () => (
  <Flex gap="spacingS" flexWrap="wrap" style={{ maxWidth: '600px' }}>
    <AIChatSuggestionPill
      icon={DeviceMobileCameraIcon}
      text="How can I analyze user engagement metrics across multiple platforms?"
      onClick={action('Long text clicked')}
    />
    <AIChatSuggestionPill
      icon={ChartLineIcon}
      text="Show me the conversion rate trends for the past quarter"
      isActive={true}
      onClick={action('Long active text clicked')}
    />
  </Flex>
);

export const InteractiveGroup = () => {
  const [activeIndex, setActiveIndex] = React.useState<number | null>(null);

  const suggestions = [
    {
      icon: DeviceMobileCameraIcon,
      text: 'How many mobile visitors do we have?',
    },
    { icon: ChartLineIcon, text: 'Show me the top performing pages' },
    { icon: ChatIcon, text: 'Summarize user feedback' },
    { icon: CodeSimpleIcon, text: 'Generate API documentation' },
  ];

  return (
    <Flex gap="spacingS" flexWrap="wrap">
      {suggestions.map((suggestion, index) => (
        <AIChatSuggestionPill
          key={index}
          icon={suggestion.icon}
          text={suggestion.text}
          isActive={activeIndex === index}
          onClick={() => {
            setActiveIndex(index);
            action(`Clicked: ${suggestion.text}`)();
          }}
        />
      ))}
    </Flex>
  );
};
