import { NavList } from '@contentful/f36-components';
import { Box, type CommonProps } from '@contentful/f36-core';
import React, { forwardRef, Ref, useEffect, useRef, useState } from 'react';
import { getStyles } from './AIChatHistory.styles';
import { AIChatHistoryTabs } from './AIChatHistoryTabs';
import { AIChatHistoryThread } from './AIChatHistoryThread';

export interface MessageThread {
  id: string;
  title: string;
  lastActivity?: Date;
  onThreadClick?: () => void;
  statusIcon?: React.ReactNode;
  status?: string;
  group?: string;
}

export interface MessageGroup {
  id: string;
  label: string;
  icon?: React.ReactNode;
  filter: (thread: MessageThread) => boolean;
}

export type MessageGroups =
  | [MessageGroup, MessageGroup]
  | [MessageGroup, MessageGroup, MessageGroup];

export interface AIChatHistoryProps extends CommonProps {
  threads: MessageThread[];
  groups?: MessageGroups;
}

function _AIChatHistory(props: AIChatHistoryProps, ref: Ref<HTMLDivElement>) {
  const {
    className,
    testId = 'cf-ui-ai-chat-history',
    threads,
    groups,
    ...otherProps
  } = props;

  const hasGroups = groups && groups.length > 0;

  const [activeGroupId, setActiveGroupId] = useState<string | undefined>(
    hasGroups ? groups[0].id : undefined,
  );

  const [focusedThreadIndex, setFocusedThreadIndex] = useState<number>(0);

  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTop = 0;
    }
    setFocusedThreadIndex(0);
  }, [activeGroupId]);

  const handleContainerKeyDown = (event: React.KeyboardEvent) => {
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
        focusedThread?.onThreadClick();

        return;
      }
      default:
        return;
    }

    setFocusedThreadIndex(newIndex);

    const threadElement = document.getElementById(
      `thread-${filteredThreads[newIndex].id}`,
    );
    threadElement?.focus();
  };

  const styles = getStyles({ hasGroups });

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
    if (!hasGroups) {
      return (
        <NavList
          ref={scrollContainerRef}
          className={styles.groupThreads}
          onKeyDown={handleContainerKeyDown}
          tabIndex={0}
          aria-label="Message threads"
          as="div"
        >
          {threads.map((thread) => renderThread(thread))}
        </NavList>
      );
    }

    const handleTabClick = (groupId: string) => {
      setActiveGroupId(groupId);
    };

    const activeGroup = groups.find((group) => group.id === activeGroupId);

    const filteredThreads = activeGroup
      ? threads.filter(activeGroup.filter)
      : threads;

    return (
      <>
        <AIChatHistoryTabs
          groups={groups}
          activeGroupId={activeGroupId}
          onTabClick={handleTabClick}
          testId={`${testId}-tabs`}
        />
        <NavList
          ref={scrollContainerRef}
          className={styles.groupThreads}
          role="tabpanel"
          id={`tabpanel-${activeGroupId}`}
          aria-labelledby={`tab-${activeGroupId}`}
          aria-label={`${activeGroup?.label || 'All'} threads`}
          onKeyDown={handleContainerKeyDown}
          tabIndex={0}
          as="div"
        >
          {filteredThreads.map((thread) => renderThread(thread))}
        </NavList>
      </>
    );
  };

  return (
    <Box
      ref={ref}
      testId={testId}
      className={className}
      data-test-id={testId}
      {...otherProps}
    >
      <Box className={styles.container}>{renderGroupedThreads()}</Box>
    </Box>
  );
}

/**
 * Displays a scrollable list of message threads, optionally grouped into tabs. Groups and status indicators can be customised.
 */
export const AIChatHistory = forwardRef(_AIChatHistory);
