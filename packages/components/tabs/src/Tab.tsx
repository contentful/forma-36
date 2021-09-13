import React, { useCallback } from 'react';
import type { KeyboardEvent, MouseEvent } from 'react';
import type { CommonProps } from '@contentful/f36-core';
import { Button } from '@contentful/f36-button';

import { getTabStyles } from './Tabs.styles';
import { useTabsContext } from './tabsContext';
export interface TabProps extends CommonProps {
  /**
   * Takes id of the TabPanel it panelId
   */
  panelId: string;
  /**
   * onSelect is run when the Tab is selected
   */
  onSelect?: (id: string, e: React.SyntheticEvent) => void;
  isDisabled?: boolean;
  children: React.ReactNode;
}

function _Tab(
  {
    children,
    className,
    isDisabled = false,
    panelId,
    onSelect,
    style,
    testId = 'cf-ui-tab',
    ...otherProps
  }: TabProps,
  ref: React.Ref<HTMLButtonElement>,
): React.ReactElement {
  const { selectedTab, setSelectedTab } = useTabsContext();
  const isSelected = panelId === selectedTab;
  const styles = getTabStyles({ className, isSelected, isDisabled });

  const handleClick = useCallback(
    (e: MouseEvent<HTMLElement>) => {
      if (onSelect && !isDisabled) {
        setSelectedTab(panelId);
        onSelect(panelId, e);
      }
    },
    [isDisabled, panelId, onSelect, setSelectedTab],
  );

  const handleKeyPress = useCallback(
    (e: KeyboardEvent<HTMLElement>) => {
      if (onSelect && e.key === 'Enter') {
        setSelectedTab(panelId);
        onSelect(panelId, e);
        e.preventDefault();
      }
    },
    [panelId, onSelect, setSelectedTab],
  );

  const elementProps = {
    className: styles.tab,
    onClick: handleClick,
    onKeyPress: handleKeyPress,
    style,
    testId,
    tabIndex: isSelected ? 0 : -1,
  };

  elementProps['aria-selected'] = isSelected;
  elementProps['role'] = 'tab';
  elementProps['aria-controls'] = panelId;
  return (
    <Button
      variant="primary"
      isDisabled={isDisabled}
      {...elementProps}
      {...otherProps}
      id={`${panelId}-control-tab`}
      ref={ref}
    >
      {children}
    </Button>
  );
}

export const Tab = React.forwardRef(_Tab);
