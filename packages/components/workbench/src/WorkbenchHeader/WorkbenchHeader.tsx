import React, {
  isValidElement,
  type ReactElement,
  type ReactNode,
} from 'react';
import { cx } from 'emotion';
import { Flex, type CommonProps } from '@contentful/f36-core';
import { Paragraph, Subheading } from '@contentful/f36-typography';
import type { IconComponent } from '@contentful/f36-icon';
import { ArrowBackwardIcon } from '@contentful/f36-icons';
import { IconButton } from '@contentful/f36-button';

import { getWorkbenchHeaderStyles } from './WorkbenchHeader.styles';

export interface WorkbenchHeaderProps extends CommonProps {
  /** This is the title that will be shown inside the Header component */
  title: string | ReactElement;
  /** This is the icon that will be shown on the left side of the title and it's possible to use Forma 36’s icons or external icons */
  icon?: IconComponent | ReactElement;
  /** This is the text that will be shown on the right side of the title in the Header component */
  description?: ReactNode;
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
  const styles = getWorkbenchHeaderStyles();
  const iconComponent =
    Icon === undefined ? null : isValidElement(Icon) ? Icon : <Icon />;

  const renderDescription = (
    description: WorkbenchHeaderProps['description'],
  ) => {
    if (typeof description === 'string') {
      return (
        <Paragraph
          className={styles.description}
          marginBottom="none"
          marginLeft="spacingS"
          marginRight="spacingM"
        >
          {description}
        </Paragraph>
      );
    }
    return description;
  };

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
          onClick={() => onBack()}
          size="small"
          icon={<ArrowBackwardIcon variant="muted" />}
        />
      )}

      <Flex
        alignItems="center"
        gap="spacing2Xs"
        flexGrow={!description ? '1' : '0'}
        marginRight="spacingS"
      >
        {hasBackButton && <div className={styles.separator} />}
        <Flex alignItems="center" gap="spacingXs">
          {Icon && iconComponent}

          {typeof title === 'string' ? (
            <Subheading className={styles.title} marginBottom="none">
              {title}
            </Subheading>
          ) : (
            title
          )}
        </Flex>
      </Flex>

      {description && renderDescription(description)}

      {actions}
    </header>
  );
};

WorkbenchHeader.displayName = 'WorkbenchHeader';
