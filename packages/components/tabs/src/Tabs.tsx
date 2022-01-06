import React from 'react';
import type { CommonProps, ExpandProps } from '@contentful/f36-core';
import * as RadixTabs from '@radix-ui/react-tabs';
import { getTabsStyles, getTabStyles, getTabPanelStyles } from './Tabs.styles';

export interface TabsProps extends CommonProps {
  children?: React.ReactNode;
  defaultTab?: string;
  currentTab?: string;
  onTabChange?: (tab: string) => void;
}

export const Tabs = React.forwardRef<HTMLDivElement, ExpandProps<TabsProps>>(
  (props, ref) => {
    const {
      defaultTab,
      currentTab,
      onTabChange,
      children,
      testId = 'cf-ui-tabs',
      ...otherProps
    } = props;
    return (
      <RadixTabs.Root
        {...otherProps}
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

export interface TabPanelProps extends CommonProps {
  id: string;
  children: React.ReactNode;
}

export const TabPanel = React.forwardRef<
  HTMLDivElement,
  ExpandProps<TabPanelProps>
>((props, ref) => {
  const {
    children,
    testId = 'cf-ui-tab-panel',
    id,
    className,
    ...otherProps
  } = props;
  const styles = getTabPanelStyles({ className });
  return (
    <RadixTabs.Content data-test-id={testId} value={id} asChild>
      <div {...otherProps} ref={ref} className={styles.tabPanel}>
        {children}
      </div>
    </RadixTabs.Content>
  );
});
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

export const Tab = React.forwardRef<HTMLDivElement, ExpandProps<TabProps>>(
  (props, ref) => {
    const {
      children,
      testId = 'cf-ui-tab',
      panelId,
      isDisabled,
      className,
      ...otherProps
    } = props;

    const styles = getTabStyles({ className, isDisabled });
    return (
      <RadixTabs.Trigger
        disabled={isDisabled}
        value={panelId}
        data-test-id={testId}
        asChild
      >
        <div {...otherProps} className={styles.tab} ref={ref}>
          <span>{children}</span>
        </div>
      </RadixTabs.Trigger>
    );
  },
);

Tab.displayName = 'Tab';
