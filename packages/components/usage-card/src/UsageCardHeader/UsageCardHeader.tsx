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

function _UsageCardHeader(
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

  return (
    <Subheading
      {...otherProps}
      ref={ref}
      className={cx(styles.usageCardHeader(tooltip), className)}
      testId={testId}
    >
      {title}
      {tooltip && (
        <Tooltip content={tooltip} className={styles.tooltip} placement="top">
          <InfoIcon className={styles.infoIcon} size="medium" />
        </Tooltip>
      )}

      {children}
    </Subheading>
  );
}

export const UsageCardHeader = forwardRef(_UsageCardHeader);
