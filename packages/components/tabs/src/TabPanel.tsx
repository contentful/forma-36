import React from 'react';
import type { CommonProps } from '@contentful/f36-core';
import { Box } from '@contentful/f36-core';

export interface TabPanelProps extends CommonProps {
  id: string;
  children: React.ReactNode;
}

function _TabPanel(
  {
    testId = 'cf-ui-tab-panel',
    className,
    children,
    id,
    ...otherProps
  }: TabPanelProps,
  ref: React.Ref<HTMLDivElement>,
): React.ReactElement {
  return (
    <Box
      as="div"
      {...otherProps}
      id={id}
      role="tabpanel"
      testId={testId}
      className={className}
      ref={ref}
    >
      {children}
    </Box>
  );
}

export const TabPanel = React.forwardRef(_TabPanel);
