import {
  formatRelativeDateTime,
  NavList,
  Skeleton,
  Text,
} from '@contentful/f36-components';
import { Box, type CommonProps } from '@contentful/f36-core';
import { cx } from 'emotion';
import React, { forwardRef, Ref } from 'react';
import { MessageThread } from '../AIChatHistory';
import { getStyles } from './AIChatHistoryThread.styles';

export interface AIChatHistoryThreadProps extends CommonProps {
  /** The thread data to display */
  thread: MessageThread;
  isLoading?: boolean;
}

function _AIChatHistoryThread(
  props: AIChatHistoryThreadProps,
  ref: Ref<HTMLButtonElement>,
) {
  const {
    className,
    thread,
    isLoading = false,
    testId = `cf-ui-ai-chat-history-thread-${thread.id}`,
  } = props;
  const styles = getStyles();

  const handleThreadClick = () => {
    thread.onThreadClick?.();
  };

  const threadContent = isLoading ? undefined : (
    <>
      <Box className={styles.threadInfo}>
        <Text as="h3" className={styles.threadTitle}>
          {thread.title}
        </Text>
        <Box className={styles.threadMeta}>
          {thread.lastActivity && (
            <Text className={styles.threadTime}>
              {formatRelativeDateTime(thread.lastActivity)}
            </Text>
          )}
        </Box>
      </Box>
      {thread.statusIcon && (
        <Box
          className={styles.threadStatus}
          aria-label={`Status: ${thread.status}`}
          title="Status"
        >
          {thread.statusIcon}
        </Box>
      )}
    </>
  );

  return (
    <NavList.Item
      ref={ref}
      className={cx(styles.thread, className)}
      testId={testId}
      as="button"
      onClick={handleThreadClick}
      id={`thread-${thread.id}`}
      aria-label={`Thread: ${thread.title}${
        thread.lastActivity
          ? `, last activity ${formatRelativeDateTime(thread.lastActivity)}`
          : ''
      }`}
    >
      <Box className={styles.threadContent} title={thread.title}>
        {isLoading && <Skeleton.Row rowCount={1} columnCount={1} />}
        {threadContent}
      </Box>
    </NavList.Item>
  );
}

export const AIChatHistoryThread = forwardRef(_AIChatHistoryThread);
