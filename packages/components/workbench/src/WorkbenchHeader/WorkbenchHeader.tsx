import React from 'react';
import { cx } from 'emotion';
import { CommonProps, Box } from '@contentful/f36-core';
import { Heading, Paragraph } from '@contentful/f36-typography';
import type { IconComponent } from '@contentful/f36-icon';
import { ChevronLeftIcon } from '@contentful/f36-icons';
import { Button } from '@contentful/f36-button';

import { getWorkbenchHeaderStyles } from './WorkbenchHeader.styles';

export interface WorkbenchHeaderProps extends CommonProps {
  title: string;
  icon?: IconComponent;
  description?: string;
  actions?: React.ReactNode;
  onBack?: () => void;
}

export function WorkbenchHeader({
  actions,
  icon,
  title,
  description,
  className,
  onBack,
  testId = 'cf-ui-workbench-header',
}: WorkbenchHeaderProps) {
  const hasBackButton = Boolean(onBack);
  const styles = getWorkbenchHeaderStyles(hasBackButton);

  const Icon = icon;

  return (
    <header
      className={cx(styles.workbenchHeader, className)}
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

      {icon && (
        <Box marginRight="spacingM">
          <Icon />
        </Box>
      )}

      <Heading
        className={!description && styles.flexGrow}
        marginBottom="none"
        marginRight="spacingM"
      >
        {title}
      </Heading>

      {description && (
        <Paragraph
          className={styles.description}
          marginBottom="none"
          marginRight="spacingM"
        >
          {description}
        </Paragraph>
      )}

      {actions && <Box>{actions}</Box>}
    </header>
  );
}
