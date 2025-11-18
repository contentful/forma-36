import React, { HTMLAttributes } from 'react';
import {
  Box,
  Flex,
  type CommonProps,
  type PickUnion,
} from '@contentful/f36-core';
import { getUsageCountStyles } from './UsageCount.styles';
import { Caption, DisplayText, Text } from '@contentful/f36-typography';

/**
 * Types narrowed to the specific usage types.
 * "variant" represents usage type and can be either periodic, entitlement or consumption.
 * - periodic: e.g. "10 GB / month"
 * - entitlement: e.g. "10 GB / 100 GB included"
 * - consumption: e.g. "150 consumption units per year". Consumption is used for InfoCard.
 * "valueDescription" is commonly used for InfoCard. valueDescription cannot be used together with periodType and quota.
 * "periodType" is used for Periodic usages, e.g. "10 GB / month". Commonly used for UsageCard.
 * "quota" is used for Entitlement usages, e.g. "100 GB included". Commonly used for UsageCard.
 * "includedLabel" is used for entitlement usages to add the word "included" after the quota, e.g. "100 GB included".
 */

export type Variant = 'consumption' | 'periodic' | 'entitlement';

type usageCountType =
  | {
      valueDescription: string;
      periodType?: never;
      quota?: never;
      variant: PickUnion<Variant, 'consumption'>;
      includedLabel?: string;
    }
  | {
      valueDescription?: never;
      periodType: 'month' | 'year';
      quota?: never;
      variant: PickUnion<Variant, 'periodic'>;
      includedLabel?: string;
    }
  | {
      valueDescription?: never;
      periodType?: never;
      quota: number | string;
      variant: PickUnion<Variant, 'entitlement'>;
      includedLabel?: string;
    };

export type UsageCountProps = {
  value?: number | string;
  valueUnit?: string;
} & CommonProps &
  usageCountType &
  HTMLAttributes<HTMLDivElement>;

function _UsageCount(props: UsageCountProps, ref: React.Ref<HTMLDivElement>) {
  const {
    value,
    valueUnit,
    valueDescription,
    periodType,
    variant = 'periodic',
    quota,
    className,
    testId = 'cf-ui-usage-count',
    includedLabel,
    ...otherProps
  } = props;
  const styles = getUsageCountStyles();

  const quotaCaption = quota !== undefined && (
    <Caption className={styles.captionText}>
      / {quota}
      {valueUnit && ` ${valueUnit}`}
      {includedLabel && ` ${includedLabel}`}
    </Caption>
  );

  return (
    <Box ref={ref} className={className} data-test-id={testId} {...otherProps}>
      <Flex
        className={styles.valueDescriptionContainer(variant)}
        alignItems="baseline"
        gap="spacing2Xs"
      >
        {variant === 'consumption' ? (
          <>
            <Text className={styles.consumptionUnits}>{value} </Text>
            <Caption className={styles.captionText}>{valueDescription}</Caption>
          </>
        ) : (
          <>
            <DisplayText marginBottom="spacing2Xs">
              {value}
              {valueUnit && ` ${valueUnit}`}
            </DisplayText>
            {variant === 'periodic' && (
              <Caption className={styles.captionText}>
                / {periodType || 'month'}
              </Caption>
            )}
            {quotaCaption}
          </>
        )}
      </Flex>
    </Box>
  );
}

export const UsageCount = React.forwardRef(_UsageCount);
