import React from 'react';
import type { CommonProps } from '@contentful/f36-core';

export interface TabPanelProps extends CommonProps {
  id: string;
  children: React.ReactNode;
}

export function TabPanel({
  testId = 'cf-ui-tab-panel',
  className,
  children,
  id,
  ...otherProps
}: TabPanelProps): React.ReactElement {
  return (
    <div
      {...otherProps}
      id={id}
      role="tabpanel"
      data-test-id={testId}
      className={className}
    >
      {children}
    </div>
  );
}
