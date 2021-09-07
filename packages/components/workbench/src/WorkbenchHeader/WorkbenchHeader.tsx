import React from 'react';
import { cx } from 'emotion';
import { CommonProps, Box } from '@contentful/f36-core';
import { Heading, Paragraph } from '@contentful/f36-typography';
import type { IconComponent } from '@contentful/f36-icon';
import { ChevronLeftIcon } from '@contentful/f36-icons';
import { Button } from '@contentful/f36-button';

import { getWorkbenchHeaderStyles } from './WorkbenchHeader.styles';

export interface WorkbenchHeaderProps extends CommonProps {
  /** This is the title that will be shown inside the Header component */
  title: string;
  /** This is the icon that will be shown on the left side of the title and it's possible to use Forma 36’s icons or external icons */
  icon?: IconComponent;
  /** This is the text that will be shown on the right side of the title in the Header component */
  description?: string;
  /** It's possible to pass a ReactNode to be shown at the end of the Header */
  actions?: React.ReactNode;
  /** If a function is passed to the onBack prop the Header will show a back button that will call this function when clicked */
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
