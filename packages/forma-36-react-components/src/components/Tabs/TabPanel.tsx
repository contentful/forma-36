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
  ...rest
}: TabPanelProps): React.ReactElement {
  return (
    <div
      {...rest}
      id={id}
      role="tabpanel"
      data-test-id={testId}
      className={className}
    >
      {children}
    </div>
  );
}

export default TabPanel;
