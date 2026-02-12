import { Flex } from '@contentful/f36-components';
import type { IconProps } from '@contentful/f36-icons';
import React, { ComponentType } from 'react';
import { AIChatSuggestionPill } from '../AIChatSuggestionPill';

export type ChatEmptyStateSuggestion = {
  icon: ComponentType<IconProps>;
  text: string;
};

export interface AIChatSuggestionListProps {
  suggestions?: ChatEmptyStateSuggestion[];
  onSelect?: (suggestion: string) => void;
  testId?: string;
}

export const AIChatSuggestionList = ({
  suggestions,
  onSelect,
  testId,
}: AIChatSuggestionListProps) => {
  const activeSuggestions = suggestions || [];

  const handleSuggestionClick = (suggestion: string) => {
    onSelect?.(suggestion);
  };

  return (
    <Flex
      flexWrap="wrap"
      gap="spacingXs"
      justifyContent="center"
      fullWidth
      testId={testId}
    >
      {activeSuggestions.map((suggestion, index) => (
        <AIChatSuggestionPill
          key={index}
          icon={suggestion.icon}
          text={suggestion.text}
          onClick={() => handleSuggestionClick(suggestion.text)}
        />
      ))}
    </Flex>
  );
};
