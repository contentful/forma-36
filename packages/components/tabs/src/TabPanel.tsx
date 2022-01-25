import React from 'react';
import type { CommonProps, ExpandProps } from '@contentful/f36-core';
import * as RadixTabs from '@radix-ui/react-tabs';
import { getTabPanelStyles } from './Tabs.styles';

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
