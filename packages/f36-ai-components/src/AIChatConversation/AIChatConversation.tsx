import type { ReactNode } from 'react';
import React from 'react';

import { Box, type CommonProps } from '@contentful/f36-core';
import { cx } from '@emotion/css';
import { getStyles } from './AIChatConversation.styles';

export interface AIChatConversationProps extends CommonProps {
  /**
   * Content to be rendered inside the conversation
   */
  children: ReactNode;
}

export const AIChatConversation: React.FC<AIChatConversationProps> = ({
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

AIChatConversation.displayName = 'AIChatConversation';
