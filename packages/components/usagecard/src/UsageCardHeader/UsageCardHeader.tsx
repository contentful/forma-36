import React, { forwardRef, type HTMLAttributes, type Ref } from 'react';
import { cx } from 'emotion';
import { Tooltip } from '@contentful/f36-tooltip';
import { InfoCircleIcon } from '@contentful/f36-icons';
import { type CommonProps } from '@contentful/f36-core';
import { Subheading } from '@contentful/f36-typography';
import { getUsageCardHeaderStyles } from './UsageCardHeader.styles';

export type UsageCardHeaderProps = {
  children?: React.ReactNode;
  title?: string;
  tooltip?: string;
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
      className={cx(
        styles.usageCardHeader,
        styles.subheadingWithIcon,
        className,
      )}
      testId={testId}
    >
      {title}
      {tooltip && (
        <Tooltip content={tooltip} className={styles.tooltip} placement="top">
          <InfoCircleIcon className={styles.infoIcon} size="medium" />
        </Tooltip>
      )}

      {children}
    </Subheading>
  );
}

export const UsageCardHeader = forwardRef(_UsageCardHeader);
