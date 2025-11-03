import { Text } from '@contentful/f36-components';
import { Box, type CommonProps } from '@contentful/f36-core';
import { cx } from 'emotion';
import React, { forwardRef, Ref } from 'react';
import { MessageGroup, MessageThread } from '../AIChatHistory';
import { getStyles } from './AIChatHistoryTabs.styles';

export interface AIChatHistoryTabsProps extends CommonProps {
  /** Array of groups to display as tabs */
  groups: MessageGroup[];
  /** Array of threads to calculate tab states */
  threads: MessageThread[];
  /** Currently active group ID */
  activeGroupId?: string;
  /** Callback when a tab is clicked */
  onTabClick?: (groupId: string) => void;
}

function _AIChatHistoryTabs(
  props: AIChatHistoryTabsProps,
  ref: Ref<HTMLDivElement>,
) {
  const {
    className,
    testId = 'cf-ui-ai-chat-history-tabs',
    groups,
    threads,
    activeGroupId,
    onTabClick,
  } = props;

  const styles = getStyles();

  const handleTabClick = (groupId: string) => {
    onTabClick?.(groupId);
  };

  return (
    <Box
      ref={ref}
      className={cx(styles.tabsContainer, className)}
      testId={testId}
    >
      <Box as="ul" className={styles.tabsList}>
        {groups.map((group) => {
          const groupThreads = threads.filter(group.filter);
          const isActive =
            activeGroupId === group.id ||
            (!activeGroupId && groupThreads.length > 0);

          return (
            <Box key={group.id} as="li">
              <Box
                as="button"
                className={`${styles.tab} ${isActive ? styles.activeTab : ''}`}
                onClick={() => handleTabClick(group.id)}
                testId={`${testId}-group-${group.id}`}
                data-active={isActive}
              >
                {group.icon && (
                  <Box className={styles.tabIcon}>{group.icon}</Box>
                )}
                <Text as="span">{group.label}</Text>
              </Box>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}

/**
 * Tabs component for the AI Chat History groups
 */
export const AIChatHistoryTabs = forwardRef(_AIChatHistoryTabs);
