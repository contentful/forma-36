import { Box, type CommonProps } from '@contentful/f36-core';
import { cx } from '@emotion/css';
import React from 'react';
import { getStyles } from './AIChatArtifactMessage.styles';

export interface AIChatArtifactMessageProps extends CommonProps {
  /**
   * The content to be rendered inside the artifact message box
   */
  children?: React.ReactNode;
  /**
   * Icon component to display in the header
   */
  icon?: React.ReactElement;
  /**
   * Title text to display in the header
   */
  title?: string;
}

function AIChatArtifactMessageBase(
  props: AIChatArtifactMessageProps,
  ref: React.Ref<HTMLDivElement>,
) {
  const {
    children,
    icon,
    title,
    className,
    testId = 'cf-ui-ai-chat-artifact-message',
    ...otherProps
  } = props;

  if (!title && !icon) {
    return null;
  }

  const styles = getStyles();

  return (
    <Box
      data-test-id={testId}
      ref={ref}
      className={cx(styles.container, className)}
      {...otherProps}
    >
      <Box className={styles.header}>
        <Box className={styles.icon}>{icon}</Box>
        <Box className={styles.title}>{title}</Box>
      </Box>
      <Box className={styles.content}>{children}</Box>
    </Box>
  );
}

/**
 * A container component for displaying AI-generated artifacts with a gray header
 * containing an optional icon and title, and a content area for any children.
 */
export const AIChatArtifactMessage = React.forwardRef(
  AIChatArtifactMessageBase,
);
