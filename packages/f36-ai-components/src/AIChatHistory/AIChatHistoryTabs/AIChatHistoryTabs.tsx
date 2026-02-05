import { Text } from '@contentful/f36-components';
import { Box, type CommonProps } from '@contentful/f36-core';
import { cx } from 'emotion';
import React, { forwardRef, Ref } from 'react';
import { MessageGroups } from '../AIChatHistory';
import { getStyles } from './AIChatHistoryTabs.styles';

export interface AIChatHistoryTabsProps extends CommonProps {
  groups: MessageGroups;
  activeGroupId?: string;
  onTabClick?: (groupId: string) => void;
}

function AIChatHistoryTabsBase(
  props: AIChatHistoryTabsProps,
  ref: Ref<HTMLDivElement>,
) {
  const {
    className,
    testId = 'cf-ui-ai-chat-history-tabs',
    groups,
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
    >
      <Box as="ul" className={styles.tabsList}>
        {groups.map((group, index) => {
          const isActive =
            activeGroupId === group.id || (!activeGroupId && index === 0);

          return (
            <Box
              key={group.id}
              as="li"
              role="presentation"
              className={styles.tabContainer}
            >
              <Box
                as="button"
                className={cx(styles.tab, isActive && styles.activeTab)}
                onClick={() => handleTabClick(group.id)}
                onKeyDown={(e) => handleKeyDown(e, group.id, index)}
                testId={`${testId}-group-${group.id}`}
                role="tab"
                aria-selected={isActive}
                aria-controls={`tabpanel-${group.id}`}
                id={`tab-${group.id}`}
                tabIndex={isActive ? 0 : -1}
              >
                {group.icon && (
                  <Box
                    className={cx(
                      styles.tabIcon,
                      isActive && styles.activeTabIcon,
                    )}
                    aria-hidden="true"
                  >
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

export const AIChatHistoryTabs = forwardRef(AIChatHistoryTabsBase);
