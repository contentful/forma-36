import React from 'react';
import type { CommonProps, ExpandProps } from '@contentful/f36-core';
import * as RadixTabs from '@radix-ui/react-tabs';
import { getTabsStyles } from './Tabs.styles';

export interface TabListProps extends CommonProps {
  /**
   * visual variant of TabList
   */
  variant?: 'default' | 'horizontal-divider' | 'vertical-divider';
  /**
   * When true, keyboard navigation will loop from last tab to first, and vice versa.
   * @default true
   */
  loop?: boolean;
  children?: React.ReactNode;
}

export const TabList = React.forwardRef<
  HTMLDivElement,
  ExpandProps<TabListProps>
>((props, ref) => {
  const {
    className,
    variant,
    children,
    testId = 'cf-ui-tab-list',
    ...otherProps
  } = props;
  const styles = getTabsStyles({
    className,
    variant,
  });
  return (
    <RadixTabs.List
      {...otherProps}
      data-test-id={testId}
      className={styles.tabList}
      ref={ref}
    >
      {children}
    </RadixTabs.List>
  );
});
TabList.displayName = 'TabList';
