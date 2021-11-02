import React from 'react';
import type { CommonProps } from '@contentful/f36-core';
import * as RadixTabs from '@radix-ui/react-tabs';
import { getTabsStyles, getTabStyles } from './Tabs.styles';

export interface TabsProps extends CommonProps {
  children?: React.ReactNode;
  defaultTab?: string;
  currentTab?: string;
  onTabChange?: (tab: string) => void;
}

export const Tabs = React.forwardRef<HTMLDivElement, TabsProps>(
  (props, ref) => {
    const {
      defaultTab,
      currentTab,
      onTabChange,
      children,
      testId = 'cf-ui-tabs',
      ...rest
    } = props;
    return (
      <RadixTabs.Root
        {...rest}
        defaultValue={defaultTab}
        value={currentTab}
        onValueChange={onTabChange}
        data-test-id={testId}
        ref={ref}
      >
        {children}
      </RadixTabs.Root>
    );
  },
);

Tabs.displayName = 'Tabs';

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

export const TabList = React.forwardRef<HTMLDivElement, TabListProps>(
  (props, ref) => {
    const {
      className,
      variant,
      children,
      testId = 'cf-ui-tab-list',
      ...rest
    } = props;
    const styles = getTabsStyles({
      className,
      variant,
    });
    return (
      <RadixTabs.List
        {...rest}
        data-test-id={testId}
        className={styles.tabList}
        ref={ref}
      >
        {children}
      </RadixTabs.List>
    );
  },
);
TabList.displayName = 'TabList';

export interface TabPanelProps extends CommonProps {
  id: string;
  children: React.ReactNode;
}

export const TabPanel = React.forwardRef<HTMLDivElement, TabPanelProps>(
  (props, ref) => {
    const { children, testId = 'cf-ui-tab-panel', id, ...rest } = props;
    return (
      <RadixTabs.Content {...rest} data-test-id={testId} value={id} ref={ref}>
        {children}
      </RadixTabs.Content>
    );
  },
);
TabPanel.displayName = 'TabPanel';

export interface TabProps extends CommonProps {
  /**
   * A unique id that associates the tab with a panel.
   */
  panelId: string;
  /**
   * When true, prevents the user from interacting with the tab.
   */
  isDisabled?: boolean;
  children: React.ReactNode;
}

export const Tab = React.forwardRef<HTMLDivElement, TabProps>((props, ref) => {
  const {
    children,
    testId = 'cf-ui-tab',
    panelId,
    isDisabled,
    className,
    ...rest
  } = props;

  const styles = getTabStyles({ className, isDisabled });
  return (
    <RadixTabs.Trigger
      disabled={isDisabled}
      value={panelId}
      data-test-id={testId}
      asChild
    >
      <div className={styles.tab} {...rest} ref={ref}>
        {children}
      </div>
    </RadixTabs.Trigger>
  );
});

Tab.displayName = 'Tab';
