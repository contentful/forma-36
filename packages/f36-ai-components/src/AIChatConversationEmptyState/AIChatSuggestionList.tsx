import React, { ComponentType } from 'react';
import tokens from '@contentful/f36-tokens';
import { css } from 'emotion';
import { Caption, Flex } from '@contentful/f36-components';
import type { IconProps } from '@contentful/f36-icons';

const getStyles = () => {
  return {
    suggestionPill: css({
      backgroundColor: tokens.colorWhite,
      border: `1px solid ${tokens.gray200}`,
      borderRadius: '99px',
      padding: `6px ${tokens.spacingS}`,
      cursor: 'pointer',
      ':hover': {
        backgroundColor: tokens.gray100,
      },
      ':active': {
        backgroundColor: tokens.gray200,
      },
    }),
    suggestionIcon: css({
      color: tokens.gray500,
    }),
  };
};

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
  const styles = getStyles();
  const activeSuggestions = suggestions || [];

  const handleSuggestionClick = (suggestion: string) => {
    onSelect?.(suggestion);
  };

  const handleKeyDown = (event: React.KeyboardEvent, suggestion: string) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleSuggestionClick(suggestion);
    }
  };

  return (
    <Flex
      flexWrap="wrap"
      gap="spacingXs"
      justifyContent="center"
      fullWidth
      testId={testId}
    >
      {activeSuggestions.map((suggestion, index) => {
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
              <IconComponent size="small" className={styles.suggestionIcon} />
              <Caption fontWeight="fontWeightMedium">{suggestion.text}</Caption>
            </Flex>
          </button>
        );
      })}
    </Flex>
  );
};
