import React from 'react';
import type { CommonProps } from '@contentful/f36-core';

import { getTabsStyles } from './Tabs.styles';
export interface TabsProps extends CommonProps {
  variant?: 'default' | 'horizontal' | 'vertical';
  role?: 'navigation' | 'tablist';
  children?: React.ReactNode;
}

export function Tabs({
  className,
  children,
  variant = 'default',
  testId = 'cf-ui-tabs',
  role = 'tablist',
  style,
}: TabsProps): React.ReactElement {
  const styles = getTabsStyles({ className, variant });
  console.log('variant', variant);
  console.log('styles', styles);

  const elementProps = {
    'data-test-id': testId,
    className: styles.tabs,
    style,
  };

  if (role === 'navigation') {
    return (
      <nav {...elementProps} role="navigation">
        {children}
      </nav>
    );
  }

  return (
    <div {...elementProps} role="tablist">
      {children}
    </div>
  );
}
