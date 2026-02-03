import React, { HTMLAttributes } from 'react';
import { Box, type CommonProps, type ExpandProps } from '@contentful/f36-core';
import { getUsageCardStyles } from './UsageCard.styles';
import { Card } from '@contentful/f36-card';
import { cx } from '@emotion/css';

export type UsageCardProps = CommonProps &
  HTMLAttributes<HTMLDivElement> & {
    children?: React.ReactNode;
    header?: React.ReactNode;
    description?: React.ReactNode;
    /**
     * The type of the card.
     * @default 'usage'
     */
    variant?: 'usage' | 'info';
  };

function UsageCardBase(
  props: ExpandProps<UsageCardProps>,
  ref: React.Ref<HTMLDivElement>,
) {
  const {
    children,
    className,
    header,
    description,
    variant = 'usage',
    testId = 'cf-ui-usage-card',
    ...otherProps
  } = props;
  const styles = getUsageCardStyles();

  return (
    <Card
      {...otherProps}
      className={cx(styles.usageCard(variant), className)}
      ref={ref}
      data-test-id={testId}
      padding="large"
    >
      <Box style={{ flex: 1 }}>
        {header}
        {children}
      </Box>
      {description && <Box>{description}</Box>}
    </Card>
  );
}

UsageCardBase.displayName = 'UsageCard';

export const UsageCard = React.forwardRef(UsageCardBase);
