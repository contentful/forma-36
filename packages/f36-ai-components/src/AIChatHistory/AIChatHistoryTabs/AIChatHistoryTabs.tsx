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

  const handleKeyDown = (
    event: React.KeyboardEvent,
    groupId: string,
    index: number,
  ) => {
    let targetIndex = index;

    switch (event.key) {
      case 'ArrowLeft':
        event.preventDefault();
        targetIndex = index === 0 ? groups.length - 1 : index - 1;
        break;
      case 'ArrowRight':
        event.preventDefault();
        targetIndex = index === groups.length - 1 ? 0 : index + 1;
        break;
      case 'Home':
        event.preventDefault();
        targetIndex = 0;
        break;
      case 'End':
        event.preventDefault();
        targetIndex = groups.length - 1;
        break;
      case 'Enter':
      case ' ':
        event.preventDefault();
        handleTabClick(groupId);
        return;
      default:
        return;
    }

    // Focus the target tab
    const targetTab = document.getElementById(`tab-${groups[targetIndex].id}`);
    targetTab?.focus();
    handleTabClick(groups[targetIndex].id);
  };

  return (
    <Box
      ref={ref}
      className={cx(styles.tabsContainer, className)}
      testId={testId}
      role="tablist"
      aria-label="Chat history groups"
    >
      <Box as="ul" className={styles.tabsList}>
        {groups.map((group, index) => {
          const groupThreads = threads.filter(group.filter);
          const isActive =
            activeGroupId === group.id ||
            (!activeGroupId && groupThreads.length > 0);

          return (
            <Box key={group.id} as="li" role="presentation">
              <Box
                as="button"
                className={`${styles.tab} ${isActive ? styles.activeTab : ''}`}
                onClick={() => handleTabClick(group.id)}
                onKeyDown={(e) => handleKeyDown(e, group.id, index)}
                testId={`${testId}-group-${group.id}`}
                data-active={isActive}
                role="tab"
                aria-selected={isActive}
                aria-controls={`tabpanel-${group.id}`}
                id={`tab-${group.id}`}
                aria-label={`${group.label} - ${groupThreads.length} thread${
                  groupThreads.length === 1 ? '' : 's'
                }`}
                tabIndex={isActive ? 0 : -1}
              >
                {group.icon && (
                  <Box className={styles.tabIcon} aria-hidden="true">
                    {group.icon}
                  </Box>
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
