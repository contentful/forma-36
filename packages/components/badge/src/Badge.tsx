import React from 'react';
import type { BadgeVariant, BadgeSize } from './types';
import { Box } from '@contentful/f36-core';
import type { CommonProps } from '@contentful/f36-core';
import { getBadgeStyles } from './getBadgeStyles';

export interface BadgeProps extends CommonProps {
  /**
   * property to set size of the component
   * @default default
   */
  size?: BadgeSize;
  /**
   * prop, used for setting variation of the component
   * @default primary
   */
  variant?: BadgeVariant;
  children: React.ReactNode;
}

function Badge(props: BadgeProps, ref: React.Ref<HTMLDivElement>) {
  const {
    className,
    children,
    variant = 'primary',
    size = 'default',
    testId = 'cf-ui-badge',
    ...otherProps
  } = props;

  return (
    <Box
      as="div"
      className={className}
      ref={ref}
      data-test-id={testId}
      display="inline-block"
      css={getBadgeStyles({ variant, size })}
      {...otherProps}
    >
      {children}
    </Box>
  );
}

export const _Badge = React.forwardRef(Badge);
export { _Badge as Badge };
