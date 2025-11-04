import { Text } from '@contentful/f36-components';
import { Box, type CommonProps } from '@contentful/f36-core';
import { cx } from 'emotion';
import React, { forwardRef, Ref } from 'react';
import { MessageThread } from '../AIChatHistory';
import { formatTime } from '../utils';
import { getStyles } from './AIChatHistoryThread.styles';

export interface AIChatHistoryThreadProps extends CommonProps {
  /** The thread data to display */
  thread: MessageThread;
}

function _AIChatHistoryThread(
  props: AIChatHistoryThreadProps,
  ref: Ref<HTMLDivElement>,
) {
  const { className, testId, thread } = props;
  const styles = getStyles();

  const handleThreadClick = () => {
    thread.onThreadClick?.();
  };

  return (
    <Box
      ref={ref}
      className={cx(styles.thread, className)}
      onClick={handleThreadClick}
      testId={testId || `cf-ui-ai-chat-history-thread-${thread.id}`}
      role="button"
      tabIndex={0}
      id={`thread-${thread.id}`}
      aria-label={`Thread: ${thread.title}${
        thread.lastActivity
          ? `, last activity ${formatTime(thread.lastActivity)}`
          : ''
      }`}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleThreadClick();
        }
      }}
    >
      <Box className={styles.threadContent}>
        <Box className={styles.threadInfo}>
          <Text as="h3" className={styles.threadTitle}>
            {thread.title}
          </Text>
          <Box className={styles.threadMeta}>
            {thread.lastActivity && (
              <Text className={styles.threadTime}>
                {formatTime(thread.lastActivity)}
              </Text>
            )}
          </Box>
        </Box>
        {thread.statusIcon && (
          <Box
            className={styles.threadStatus}
            aria-label="Status"
            title="Status"
          >
            {thread.statusIcon}
          </Box>
        )}
      </Box>
    </Box>
  );
}

/**
 * Individual thread component for the AI Chat History
 */
export const AIChatHistoryThread = forwardRef(_AIChatHistoryThread);
