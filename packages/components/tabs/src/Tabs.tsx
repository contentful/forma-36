import React, { useState } from 'react';
import type { CommonProps, ExpandProps } from '@contentful/f36-core';
import * as RadixTabs from '@radix-ui/react-tabs';
import { TabsContextProvider } from './TabsContext';
import { getRootStyles } from './Tabs.styles';

export interface TabsProps extends CommonProps {
  children?: React.ReactNode;
  defaultTab?: string;
  currentTab?: string;
  onTabChange?: (tab: string) => void;
  /**
   * Defines if the tabs are displayed horizontally or vertically.
   */
  variant?: 'horizontal' | 'vertical';
}

export const Tabs = React.forwardRef<HTMLDivElement, ExpandProps<TabsProps>>(
  (props, ref) => {
    const {
      defaultTab,
      currentTab,
      onTabChange,
      children,
      variant: orientation = 'horizontal',
      testId = 'cf-ui-tabs',
      className,
      ...otherProps
    } = props;
    const [activeTab, setActiveTab] = useState(currentTab ?? defaultTab);

    const handleTabChange = (value: string) => {
      setActiveTab(value);
      onTabChange?.(value);
    };

    const styles = getRootStyles({ className, orientation });

    return (
      <TabsContextProvider value={{ orientation, currentTab: activeTab }}>
        <RadixTabs.Root
          {...otherProps}
          className={styles.root}
          orientation={orientation}
          defaultValue={defaultTab}
          value={currentTab}
          onValueChange={handleTabChange}
          data-test-id={testId}
          ref={ref}
        >
          {children}
        </RadixTabs.Root>
      </TabsContextProvider>
    );
  },
);

Tabs.displayName = 'Tabs';
