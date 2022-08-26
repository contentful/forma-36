import React, { isValidElement } from 'react';
import type { ReactElement, ReactNode } from 'react';
import { cx } from 'emotion';
import { Box } from '@contentful/f36-core';
import type { CommonProps } from '@contentful/f36-core';
import { Heading, Paragraph } from '@contentful/f36-typography';
import type { IconComponent } from '@contentful/f36-icon';
import { ChevronLeftIcon } from '@contentful/f36-icons';
import { IconButton } from '@contentful/f36-button';

import { getWorkbenchHeaderStyles } from './WorkbenchHeader.styles';

export interface WorkbenchHeaderProps extends CommonProps {
  /** This is the title that will be shown inside the Header component */
  title: string | ReactElement;
  /** This is the icon that will be shown on the left side of the title and it's possible to use Forma 36’s icons or external icons */
  icon?: IconComponent | ReactElement;
  /** This is the text that will be shown on the right side of the title in the Header component */
  description?: string;
  /** It's possible to pass a ReactNode to be shown at the end of the Header */
  actions?: ReactNode;
  /** If a function is passed to the onBack prop the Header will show a back button that will call this function when clicked */
  onBack?: () => void;
}

export const WorkbenchHeader = ({
  actions,
  icon: Icon,
  title,
  description,
  className,
  onBack,
  testId = 'cf-ui-workbench-header',
}: WorkbenchHeaderProps) => {
  const hasBackButton = Boolean(onBack);
  const styles = getWorkbenchHeaderStyles(hasBackButton);
  const iconComponent =
    Icon === undefined ? null : isValidElement(Icon) ? Icon : <Icon />;

  return (
    <header
      className={cx(styles.workbenchHeader, className)}
      data-test-id={testId}
    >
      {hasBackButton && (
        <IconButton
          aria-label="Back"
          testId="workbench-back-btn"
          variant="transparent"
          className={styles.backButton}
          onClick={() => onBack()}
          icon={<ChevronLeftIcon size="large" variant="muted" />}
        />
      )}

      {Icon && (
        <Box marginRight="spacingM" display="inline-flex">
          {iconComponent}
        </Box>
      )}

      {typeof title === 'string' ? (
        <Heading
          className={!description && styles.flexGrow}
          marginBottom="none"
          marginRight="spacingM"
        >
          {title}
        </Heading>
      ) : (
        title
      )}

      {description && (
        <Paragraph
          className={styles.description}
          marginBottom="none"
          marginRight="spacingM"
        >
          {description}
        </Paragraph>
      )}

      {actions}
    </header>
  );
};

WorkbenchHeader.displayName = 'WorkbenchHeader';
