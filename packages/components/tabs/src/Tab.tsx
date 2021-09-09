import React, { useCallback } from 'react';
import type { KeyboardEvent, MouseEvent } from 'react';
import type { CommonProps } from '@contentful/f36-core';
import { Box } from '@contentful/f36-core';

import { getTabStyles } from './Tabs.styles';
import { useTabsContext } from './tabsContext';
export interface TabProps extends CommonProps {
  /**
   * Takes id of the TabPanel it controls
   */
  controls: string;
  onSelect?: (id: string, e: React.SyntheticEvent) => void;
  href?: string;
  target?: string;
  isDisabled?: boolean;
  tabIndex?: number;
  children: React.ReactNode;
}

function _Tab(
  {
    children,
    className,
    isDisabled = false,
    controls,
    onSelect,
    style,
    tabIndex = 0,
    testId = 'cf-ui-tab',
    ...otherProps
  }: TabProps,
  ref: React.Ref<HTMLButtonElement>,
): React.ReactElement {
  const { selectedTab, setSelectedTab } = useTabsContext();
  const isSelected = controls === selectedTab;
  const styles = getTabStyles({ className, isSelected, isDisabled });

  const handleClick = useCallback(
    (e: MouseEvent<HTMLElement>) => {
      if (onSelect && !isDisabled) {
        setSelectedTab(controls);
        onSelect(controls, e);
      }
    },
    [isDisabled, controls, onSelect],
  );

  const handleKeyPress = useCallback(
    (e: KeyboardEvent<HTMLElement>) => {
      if (onSelect && e.key === 'Enter') {
        setSelectedTab(controls);
        onSelect(controls, e);
        e.preventDefault();
      }
    },
    [controls, onSelect],
  );

  const elementProps = {
    className: styles.tab,
    onClick: handleClick,
    onKeyPress: handleKeyPress,
    style,
    testId,
    tabIndex,
  };

  if (isDisabled) {
    elementProps['aria-disabled'] = true;
  }

  elementProps['aria-selected'] = isSelected;
  elementProps['role'] = 'tab';
  elementProps['aria-controls'] = controls;
  return (
    <Box
      as="button"
      {...elementProps}
      {...otherProps}
      id={`${controls}-control-tab`}
      ref={ref}
    >
      {children}
    </Box>
  );
}

export const Tab = React.forwardRef(_Tab);
