import React from 'react';
import { cx } from 'emotion';
import { Box } from '@contentful/f36-core';
import type { CommonProps } from '@contentful/f36-core';

import type { BadgeSize, BadgeVariant } from './types';
import { getBadgeStyles } from './getBadgeStyles';

export interface BadgeProps extends CommonProps {
  /**
   * Sets the size of the component
   * @default default
   */
  size?: BadgeSize;
  /**
   * Determines the variation of the component
   * @default primary
   */
  variant?: BadgeVariant;

  children: React.ReactNode;
}

const _Badge = (props: BadgeProps, ref: React.Ref<HTMLDivElement>) => {
  const {
    children,
    variant = 'primary',
    size = 'default',
    className,
    ...otherProps
  } = props;

  return (
    <Box
      as="div"
      testId="cf-ui-badge"
      display="inline-block"
      className={cx(getBadgeStyles({ variant, size }), className)}
      {...otherProps}
      ref={ref}
    >
      {children}
    </Box>
  );
};

export const Badge = React.forwardRef(_Badge);
