import type { ReactNode } from 'react';
import React from 'react';

import { Box, type CommonProps } from '@contentful/f36-core';
import { cx } from 'emotion';
import { getStyles } from './AIChatMainPanel.styles';

export interface AIChatMainPanelProps extends CommonProps {
  /**
   * Content to be rendered inside the side panel
   */
  children: ReactNode;
}

export const AIChatMainPanel: React.FC<AIChatMainPanelProps> = ({
  children,
  className,
  ...otherProps
}) => {
  const styles = getStyles();

  return (
    <Box className={cx(styles.root, className)} {...otherProps}>
      {children}
    </Box>
  );
};

AIChatMainPanel.displayName = 'AIChatSidePanel';
