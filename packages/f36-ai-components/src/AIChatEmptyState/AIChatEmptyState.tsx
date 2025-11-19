import React from 'react';
import type { ComponentType } from 'react';
import { Caption, Flex, Heading } from '@contentful/f36-components';
import type { IconProps } from '@contentful/f36-icons';
import { getStyles } from './AIChatEmptyState.styles';
const styles = getStyles();

export type ChatEmptyStateSuggestion = {
  id: string;
  icon: ComponentType<IconProps>;
  text: string;
};

interface AIChatEmptyStateProps {
  welcomeMessage?: string;
  suggestions: ChatEmptyStateSuggestion[];
  onSuggestionClick?: (suggestion: string) => void;
  testId?: string;
}

export const AIChatEmptyState = ({
  welcomeMessage,
  suggestions,
  onSuggestionClick,
  testId,
}: AIChatEmptyStateProps) => {
  const welcomeMessageToDisplay = welcomeMessage ?? 'How can I help?';
  const handleSuggestionClick = (suggestion: string) => {
    onSuggestionClick?.(suggestion);
  };

  const handleKeyDown = (event: React.KeyboardEvent, suggestion: string) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleSuggestionClick(suggestion);
    }
  };

  return (
    <Flex
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      gap="spacing2Xs"
      padding="spacing2Xs"
      fullHeight
      fullWidth
      testId={testId}
    >
      <Heading>{welcomeMessageToDisplay}</Heading>
      <Flex flexWrap="wrap" gap="spacingXs" justifyContent="center" fullWidth>
        {suggestions.map((suggestion, index) => {
          const IconComponent = suggestion.icon;
          return (
            <button
              key={index}
              type="button"
              className={styles.suggestionPill}
              onClick={() => handleSuggestionClick(suggestion.text)}
              onKeyDown={(event) => handleKeyDown(event, suggestion.text)}
            >
              <Flex alignItems="center" gap="spacingXs">
                <IconComponent className={styles.suggestionIcon} />
                <Caption>{suggestion.text}</Caption>
              </Flex>
            </button>
          );
        })}
      </Flex>
    </Flex>
  );
};
