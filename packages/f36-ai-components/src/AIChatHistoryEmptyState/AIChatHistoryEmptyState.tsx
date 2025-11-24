import React from 'react';
import { Flex, Text } from '@contentful/f36-components';
import { ClockCounterClockwiseIconIcon } from '@contentful/f36-icons';

interface AIChatHistoryEmptyStateProps {
  /**
   * The current filter state (e.g., 'paused', 'processing', 'done')
   * Used in default title and description if not provided
   */
  state?: string;
  /**
   * Custom title text. If not provided, defaults to "No chats currently in {state}"
   */
  title?: string;
  /**
   * Custom description text. If not provided, defaults to "There seems to be no {state} chat(s) in your history."
   */
  description?: string;
  /**
   * Test ID for testing purposes
   */
  testId?: string;
}

export const AIChatHistoryEmptyState = ({
  state,
  title,
  description,
  testId = 'cf-ai-chat-history-empty-state',
}: AIChatHistoryEmptyStateProps) => {
  const defaultTitle = state
    ? `No chats currently in ${state}`
    : 'No chats available';
  const defaultDescription = `There seems to be no ${state} chat(s) in your history.`;

  return (
    <Flex
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      gap="spacingS"
      padding="spacingXs"
      fullHeight
      fullWidth
      testId={testId}
    >
      <ClockCounterClockwiseIconIcon variant="muted" size="medium" />
      <Text fontWeight="fontWeightMedium" fontColor="gray700">
        {title || defaultTitle}
      </Text>
      <Text fontColor="gray700">{description || defaultDescription}</Text>
    </Flex>
  );
};
