import React from 'react';
import type { CommonProps } from '@contentful/f36-core';
import { Box } from '@contentful/f36-core';
import { getTabsStyles } from './Tabs.styles';
export interface TabListProps extends CommonProps {
  variant?: 'default' | 'horizontal-divider' | 'vertical-divider';
  children?: React.ReactNode;
}

function _TabList(
  {
    className,
    children,
    variant = 'default',
    testId = 'cf-ui-tab-list',
    style,
    ...otherProps
  }: TabListProps,
  ref: React.Ref<HTMLDivElement>,
): React.ReactElement {
  const styles = getTabsStyles({ className, variant });

  const elementProps = {
    testId,
    className: styles.tabList,
    style,
    ...otherProps,
  };

  return (
    <Box as="div" {...elementProps} role="tablist" ref={ref}>
      {children}
    </Box>
  );
}

export const TabList = React.forwardRef(_TabList);
