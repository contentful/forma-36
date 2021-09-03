import React from 'react';
import { cx } from 'emotion';
import { CommonProps, Box } from '@contentful/f36-core';
import { Heading, Paragraph } from '@contentful/f36-typography';
import { ChevronLeftIcon } from '@contentful/f36-icons';
import { Button } from '@contentful/f36-button';

import { getWorkbenchHeaderStyles } from './WorkbenchHeader.styles';

export interface WorkbenchHeaderProps extends CommonProps {
  title: string;
  description?: string;
  actions?: React.ReactNode;
  onBack?: () => void;
}

export function WorkbenchHeader({
  actions,
  title,
  description,
  className,
  onBack,
  testId = 'cf-ui-workbench-header',
}: WorkbenchHeaderProps) {
  const styles = getWorkbenchHeaderStyles();

  const hasBackButton = Boolean(onBack);

  return (
    <header
      className={cx(styles.workbenchHeader, className, {
        [styles.hasBackButton]: hasBackButton,
      })}
      data-test-id={testId}
    >
      {hasBackButton && (
        <Button
          variant="transparent"
          testId="workbench-back-btn"
          className={styles.backButton}
          onClick={() => onBack()}
        >
          <ChevronLeftIcon aria-label="Back" size="large" variant="muted" />
        </Button>
      )}

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
