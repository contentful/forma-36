import { Flex } from '@contentful/f36-components';
import React from 'react';
import {
  AIChatSuggestionPill,
  AIChatSuggestionPillProps,
} from '../AIChatSuggestionPill';

export type ChatEmptyStateSuggestion = Pick<
  AIChatSuggestionPillProps,
  'icon' | 'text' | 'description' | 'task'
>;

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
      gap="spacingL"
      justifyContent="center"
      fullWidth
      testId={testId}
    >
      {activeSuggestions.map((suggestion, index) => (
        <AIChatSuggestionPill
          key={index}
          icon={suggestion.icon}
          text={suggestion.text}
          description={suggestion.description}
          onClick={() =>
            handleSuggestionClick(suggestion.task || suggestion.text)
          }
        />
      ))}
    </Flex>
  );
};
