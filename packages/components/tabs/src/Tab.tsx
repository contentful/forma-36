import React from 'react';
import type { CommonProps, ExpandProps } from '@contentful/f36-core';
import * as RadixTabs from '@radix-ui/react-tabs';
import { getTabStyles } from './Tabs.styles';

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
