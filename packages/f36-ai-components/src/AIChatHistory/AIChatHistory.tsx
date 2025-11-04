import { Text } from '@contentful/f36-components';
import { Box, type CommonProps, Flex } from '@contentful/f36-core';
import React, { forwardRef, Ref, useEffect, useRef, useState } from 'react';
import { getStyles } from './AIChatHistory.styles';
import { AIChatHistoryTabs } from './AIChatHistoryTabs';
import { AIChatHistoryThread } from './AIChatHistoryThread';

export interface MessageThread {
  /** Unique identifier for the thread */
  id: string;
  /** Title of the message thread */
  title: string;
  /** Timestamp of the last activity */
  lastActivity?: Date;
  /** Click handler for the thread */
  onThreadClick?: () => void;
  /** Status icon to display on the right */
  statusIcon?: React.ReactNode;
  /** Optional status indicator */
  status?: 'review' | 'error';
  /** Group the thread belongs to */
  group?: 'paused' | 'processing' | 'done';
}

export interface MessageGroup {
  /** Unique identifier for the group */
  id: string;
  /** Display label for the group */
  label: string;
  /** Icon to display next to the group label */
  icon?: React.ReactNode;
  /** Function to filter threads that belong to this group */
  filter: (thread: MessageThread) => boolean;
}

export interface AIChatHistoryProps extends CommonProps {
  /** Array of message threads to display */
  threads: MessageThread[];
  /** Optional groups to organize threads */
  groups?: MessageGroup[];
  /** Maximum height of the scrollable area */
  maxHeight?: string | number;
  /** Custom content to display when no threads are available */
  emptyState?: React.ReactNode;
  /** Loading state */
  isLoading?: boolean;
}

function _AIChatHistory(props: AIChatHistoryProps, ref: Ref<HTMLDivElement>) {
  const {
    className,
    testId = 'cf-ui-ai-chat-history',
    threads,
    groups,
    maxHeight = '400px',
    emptyState,
    isLoading = false,
  } = props;

  // State to track the currently selected tab
  const [activeGroupId, setActiveGroupId] = useState<string | undefined>(
    groups && groups.length > 0 ? groups[0].id : undefined,
  );

  // State to track the currently focused thread for keyboard navigation
  const [focusedThreadIndex, setFocusedThreadIndex] = useState<number>(0);

  // Ref for the scrollable thread container
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Reset scroll position when active group changes
  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTop = 0;
    }
    // Reset focused thread when group changes
    setFocusedThreadIndex(0);
  }, [activeGroupId]);

  const handleContainerKeyDown = (event: React.KeyboardEvent) => {
    // Find the currently displayed threads
    const activeGroup = groups?.find((group) => group.id === activeGroupId);
    const filteredThreads = activeGroup
      ? threads.filter(activeGroup.filter)
      : threads;

    if (filteredThreads.length === 0) return;

    let newIndex = focusedThreadIndex;

    switch (event.key) {
      case 'ArrowDown':
        event.preventDefault();
        newIndex = Math.min(focusedThreadIndex + 1, filteredThreads.length - 1);
        break;
      case 'ArrowUp':
        event.preventDefault();
        newIndex = Math.max(focusedThreadIndex - 1, 0);
        break;
      case 'Home':
        event.preventDefault();
        newIndex = 0;
        break;
      case 'End':
        event.preventDefault();
        newIndex = filteredThreads.length - 1;
        break;
      case 'Enter':
      case ' ': {
        event.preventDefault();
        const focusedThread = filteredThreads[focusedThreadIndex];
        if (focusedThread?.onThreadClick) {
          focusedThread.onThreadClick();
        }
        return;
      }
      default:
        return;
    }

    setFocusedThreadIndex(newIndex);

    // Focus the thread element
    const threadElement = document.getElementById(
      `thread-${filteredThreads[newIndex].id}`,
    );
    threadElement?.focus();
  };

  const styles = getStyles({ maxHeight });

  const renderThread = (thread: MessageThread) => {
    return (
      <AIChatHistoryThread
        key={thread.id}
        thread={thread}
        testId={`${testId}-thread-${thread.id}`}
      />
    );
  };

  const renderGroupedThreads = () => {
    if (!groups || groups.length === 0) {
      return (
        <Box
          ref={scrollContainerRef}
          className={styles.groupThreads}
          onKeyDown={handleContainerKeyDown}
          tabIndex={0}
          role="list"
          aria-label="Message threads"
        >
          {threads.map((thread) => renderThread(thread))}
        </Box>
      );
    }

    const handleTabClick = (groupId: string) => {
      setActiveGroupId(groupId);
    };

    // Find the currently active group
    const activeGroup = groups.find((group) => group.id === activeGroupId);

    // Filter threads based on the active group's filter function
    const filteredThreads = activeGroup
      ? threads.filter(activeGroup.filter)
      : threads;

    // Render tabs at the top using the AIChatHistoryTabs component
    const renderTabs = () => (
      <AIChatHistoryTabs
        groups={groups}
        threads={threads}
        activeGroupId={activeGroupId}
        onTabClick={handleTabClick}
        testId={`${testId}-tabs`}
      />
    );

    // Show filtered threads based on selected tab
    return (
      <>
        {renderTabs()}
        <Box
          ref={scrollContainerRef}
          className={styles.groupThreads}
          role="tabpanel"
          id={`tabpanel-${activeGroupId}`}
          aria-labelledby={`tab-${activeGroupId}`}
          aria-label={`${activeGroup?.label || 'All'} threads`}
          onKeyDown={handleContainerKeyDown}
          tabIndex={0}
        >
          {filteredThreads.map((thread) => renderThread(thread))}
        </Box>
      </>
    );
  };

  const renderContent = () => {
    if (isLoading) {
      return (
        <Flex
          justifyContent="center"
          alignItems="center"
          className={styles.loadingState}
          testId={`${testId}-loading`}
        >
          <Text fontSize="fontSizeS" fontColor="gray600">
            Loading...
          </Text>
        </Flex>
      );
    }

    if (threads.length === 0) {
      return (
        <Flex
          justifyContent="center"
          alignItems="center"
          className={styles.emptyState}
          testId={`${testId}-empty`}
        >
          {emptyState || (
            <Text fontSize="fontSizeS" fontColor="gray600">
              No conversations yet
            </Text>
          )}
        </Flex>
      );
    }

    return renderGroupedThreads();
  };

  return (
    <Box ref={ref} testId={testId} className={className} data-test-id={testId}>
      <Box className={styles.container}>{renderContent()}</Box>
    </Box>
  );
}

/**
 * Displays a scrollable list of message threads, optionally grouped by status.
 * Supports filtering threads into groups with custom labels and icons.
 */
export const AIChatHistory = forwardRef(_AIChatHistory);
