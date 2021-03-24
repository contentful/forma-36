import React from 'react';
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
    ...otherProps
  } = props;

  return (
    <Box
      as="div"
      testId="cf-ui-badge"
      display="inline-block"
      css={getBadgeStyles({ variant, size })}
      {...otherProps}
      ref={ref}
    >
      {children}
    </Box>
  );
};

export const Badge = React.forwardRef(_Badge);
