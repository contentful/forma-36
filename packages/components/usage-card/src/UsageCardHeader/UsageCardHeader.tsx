import React, { forwardRef, type HTMLAttributes, type Ref } from 'react';
import { cx } from '@emotion/css';
import { Tooltip } from '@contentful/f36-tooltip';
import { type CommonProps } from '@contentful/f36-core';
import { Subheading } from '@contentful/f36-typography';
import { getUsageCardHeaderStyles } from './UsageCardHeader.styles';
import { InfoIcon } from '@contentful/f36-icons';

export type UsageCardHeaderProps = {
  children?: React.ReactNode;
  title?: string;
  tooltip?: string | React.ReactElement;
} & CommonProps &
  HTMLAttributes<HTMLDivElement>;

function UsageCardHeaderBase(
  props: UsageCardHeaderProps,
  ref: Ref<HTMLDivElement>,
) {
  const {
    children,
    title,
    tooltip,
    className,
    testId = 'cf-ui-usage-card-header',
    ...otherProps
  } = props;
  const styles = getUsageCardHeaderStyles();

  const hasTooltip = tooltip !== undefined;

  return (
    <Subheading
      {...otherProps}
      ref={ref}
      className={cx(styles.usageCardHeader(hasTooltip), className)}
      testId={testId}
    >
      {title}
      {hasTooltip && (
        <Tooltip content={tooltip} className={styles.tooltip} placement="top">
          <InfoIcon className={styles.infoIcon} size="medium" />
        </Tooltip>
      )}

      {children}
    </Subheading>
  );
}

UsageCardHeaderBase.displayName = 'UsageCardHeader';

export const UsageCardHeader = forwardRef(UsageCardHeaderBase);
