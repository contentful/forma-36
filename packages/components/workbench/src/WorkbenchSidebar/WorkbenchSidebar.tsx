import React from 'react';
import { cx } from 'emotion';
import type { CommonProps, PropsWithHTMLElement } from '@contentful/f36-core';

import { getWorkbenchSidebarStyles } from './WorkbenchSidebar.styles';

export interface WorkbenchSidebarOwnProps extends CommonProps {
  children: React.ReactNode;
  /** It sets the correct border style for the Sidebar */
  position?: 'left' | 'right';
}

export type WorkbenchSidebarProps = PropsWithHTMLElement<
  WorkbenchSidebarOwnProps,
  'aside'
>;

export function WorkbenchSidebar({
  children,
  className,
  position = 'left',
  testId = 'cf-ui-workbench-sidebar',
  ...otherProps
}: WorkbenchSidebarProps) {
  const styles = getWorkbenchSidebarStyles(position);

  return (
    <aside
      data-test-id={testId}
      {...otherProps}
      className={cx(styles.workbenchSidebar, className)}
    >
      {children}
    </aside>
  );
}
WorkbenchSidebar.displayName = 'WorkbenchSidebar';
