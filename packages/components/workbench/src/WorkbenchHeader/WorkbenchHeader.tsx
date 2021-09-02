import React from 'react';
import { cx } from 'emotion';
import { CommonProps, Box } from '@contentful/f36-core';
import { Heading, Paragraph } from '@contentful/f36-typography';

import { getWorkbenchHeaderStyles } from './WorkbenchHeader.styles';

export interface WorkbenchHeaderProps extends CommonProps {
  title: string;
  description?: string;
  actions?: React.ReactNode;
}

export function WorkbenchHeader({
  actions,
  title,
  description,
  className,
  testId = 'cf-ui-workbench-header',
}: WorkbenchHeaderProps) {
  const styles = getWorkbenchHeaderStyles();

  return (
    <header
      className={cx(styles.workbenchHeader, className)}
      data-test-id={testId}
    >
      <Heading marginBottom="none">{title}</Heading>
      {description && (
        <Paragraph
          className={styles.description}
          marginBottom="none"
          marginLeft="spacingM"
        >
          {description}
        </Paragraph>
      )}
      {actions && <Box marginLeft="spacingM">{actions}</Box>}
    </header>
  );
}
