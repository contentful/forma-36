import React from 'react';

export interface TabPanelProps {
  id: string;
  className?: string;
  testId?: string;
  style?: React.CSSProperties;
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
