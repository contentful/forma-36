import React from 'react';
import type { CommonProps } from '@contentful/f36-core';
import { Box } from '@contentful/f36-core';

import { getTabsStyles } from './Tabs.styles';
export interface TabsProps extends CommonProps {
  variant?: 'default' | 'horizontal-divider' | 'vertical-divider';
  role?: 'navigation' | 'tablist';
  children?: React.ReactNode;
}

function _Tabs(
  {
    className,
    children,
    variant = 'default',
    testId = 'cf-ui-tabs',
    role = 'tablist',
    style,
  }: TabsProps,
  ref: React.Ref<HTMLDivElement>,
): React.ReactElement {
  const styles = getTabsStyles({ className, variant });

  const elementProps = {
    testId,
    className: styles.tabs,
    style,
  };

  if (role === 'navigation') {
    return (
      <Box as="nav" {...elementProps} role="navigation" ref={ref}>
        {children}
      </Box>
    );
  }

  return (
    <Box as="div" {...elementProps} role="tablist" ref={ref}>
      {children}
    </Box>
  );
}

export const Tabs = React.forwardRef(_Tabs);
