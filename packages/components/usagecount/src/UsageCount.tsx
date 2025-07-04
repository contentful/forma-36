import React, { HTMLAttributes } from 'react';
import { cx } from 'emotion';
import { Box, Flex, type CommonProps } from '@contentful/f36-core';
import { getUsageCountStyles } from './UsageCount.styles';
import { Caption, DisplayText, Text } from '@contentful/f36-typography';

export type UsageCountProps = {
  children?: React.ReactNode;
  value?: number | string;
  valueUnit?: string;
  /**
   * Description of the value, e.g. "150 consumption units per year".
   * valueDescription is commonly used for InfoCard.
   * valueDescription cannot be used together with periodType and quota.
   */
  valueDescription?: string;
  /**
   * Can be either periodType or quota.
   * periodType is used for Periodic usages, e.g. "10 GB / month".
   * quota is used for Entitlement usages, e.g. "100 GB included".
   */
  periodType?: 'month' | 'year';
  /**
   * Usage type can be either periodic, entitlement or consumption.
   * - periodic: e.g. "10 GB / month"
   * - entitlement: e.g. "10 GB / 100 GB included"
   * - consumption: e.g. "150 consumption units per year". Consumption is used for InfoCard.
   */
  variant?: 'periodic' | 'entitlement' | 'consumption';
  quota?: number;
  included?: boolean;
} & CommonProps &
  HTMLAttributes<HTMLDivElement>;

function _UsageCount(props: UsageCountProps, ref: React.Ref<HTMLDivElement>) {
  const {
    children,
    value,
    valueUnit,
    valueDescription,
    periodType,
    variant = 'periodic',
    quota,
    included,
    className,
    testId = 'cf-ui-usage-count',
    ...otherProps
  } = props;
  const styles = getUsageCountStyles();

  return (
    <Box
      ref={ref}
      className={cx(className)}
      data-test-id={testId}
      {...otherProps}
    >
      {variant === 'consumption' && (
        <Flex
          className={styles.valueDescriptionContainer}
          alignItems="baseline"
          gap="spacing2Xs"
        >
          <Text className={styles.consumptionUnits}>{value} </Text>
          <Caption className={styles.captionText}>{valueDescription}</Caption>
        </Flex>
      )}
      {variant === 'entitlement' && (
        <Flex alignItems="baseline" gap="spacing2Xs">
          <DisplayText marginBottom="spacing2Xs">
            {value}
            {valueUnit && ` ${valueUnit}`}
          </DisplayText>
          <Caption className={styles.captionText}>
            / {quota}
            {valueUnit && ` ${valueUnit}`} included
          </Caption>
        </Flex>
      )}
      {variant === 'periodic' && (
        <Flex alignItems="baseline" gap="spacing2Xs">
          <DisplayText marginBottom="spacing2Xs">
            {value}
            {valueUnit && ` ${valueUnit}`}
          </DisplayText>
          <Caption className={styles.captionText}>
            / {periodType || 'month'}
          </Caption>
        </Flex>
      )}
      {children}
    </Box>
  );
}

export const UsageCount = React.forwardRef(_UsageCount);
