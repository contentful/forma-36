import { Flex, Text } from '@contentful/f36-components';
import { type CommonProps } from '@contentful/f36-core';
import { ClockCounterClockwiseIconIcon } from '@contentful/f36-icons';
import React from 'react';
import { getStyles } from './AIChatHistoryEmptyState.styles';

export interface AIChatHistoryEmptyStateProps extends CommonProps {
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
}

const styles = getStyles();

export const AIChatHistoryEmptyState = ({
  state,
  title,
  description,
  className,
  testId = 'cf-ai-chat-history-empty-state',
  style,
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
      className={className}
      testId={testId}
      style={style}
    >
      <ClockCounterClockwiseIconIcon size="medium" />
      <Text className={styles.title}>{title || defaultTitle}</Text>
      <Text className={styles.description}>
        {description || defaultDescription}
      </Text>
    </Flex>
  );
};
