import React, { forwardRef, type HTMLAttributes, type Ref } from 'react';
import { cx } from '@emotion/css';
import { type CommonProps } from '@contentful/f36-core';
import { Caption } from '@contentful/f36-typography';
import { getUsageCardDescriptionStyles } from './UsageCard.styles';

export type UsageCardDescriptionProps = {
  children: React.ReactNode;
} & CommonProps &
  HTMLAttributes<HTMLDivElement>;

const _UsageCardDescription = (
  props: UsageCardDescriptionProps,
  ref: Ref<HTMLDivElement>,
) => {
  const {
    children,
    className,
    testId = 'cf-ui-usage-card-description',
    ...otherProps
  } = props;
  const styles = getUsageCardDescriptionStyles();

  return (
    <Caption
      {...otherProps}
      ref={ref}
      className={cx(styles.usageCardDescription, className)}
      testId={testId}
    >
      {children}
    </Caption>
  );
};

export const UsageCardDescription = forwardRef(_UsageCardDescription);
