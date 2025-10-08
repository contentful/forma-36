import React from 'react';
import type { CommonProps, ExpandProps } from '@contentful/f36-core';
import * as RadixTabs from '@radix-ui/react-tabs';

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
