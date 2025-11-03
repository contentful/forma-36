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

  const getStatusIconStyles = () => {
    switch (thread.statusType) {
      case 'warning':
        return styles.warningIcon;
      case 'success':
        return styles.successIcon;
      default:
        return styles.visibleIcon;
    }
  };

  return (
    <Box
      ref={ref}
      className={cx(
        styles.thread,
        thread.isActive && styles.activeThread,
        className,
      )}
      onClick={handleThreadClick}
      testId={testId || `cf-ui-ai-chat-history-thread-${thread.id}`}
      data-active={thread.isActive}
    >
      <Box className={styles.threadContent}>
        <Box className={styles.threadInfo}>
          <Text as="h3" className={styles.threadTitle}>
            {thread.title}
          </Text>
          {thread.preview && (
            <Text className={styles.threadPreview}>{thread.preview}</Text>
          )}
          <Box className={styles.threadMeta}>
            {thread.lastActivity && (
              <Text className={styles.threadTime}>
                {formatTime(thread.lastActivity)}
              </Text>
            )}
          </Box>
        </Box>
        {(thread.statusIcon || thread.statusType) && (
          <Box className={styles.threadStatus}>
            <Box
              className={cx(styles.statusIcon, getStatusIconStyles())}
              data-status={thread.statusType}
            >
              {thread.statusIcon}
            </Box>
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
