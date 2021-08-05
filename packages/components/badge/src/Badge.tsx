import React from 'react';
import { cx } from 'emotion';
import { Box } from '@contentful/f36-core';
import type {
  CommonProps,
  PolymorphicComponentProps,
} from '@contentful/f36-core';

import type { BadgeSize, BadgeVariant } from './types';
import { getBadgeStyles } from './getBadgeStyles';

export interface BadgeInternalProps extends CommonProps {
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

export type BadgeProps = PolymorphicComponentProps<'div', BadgeInternalProps>;

export const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
  (props, ref) => {
    const {
      children,
      variant = 'primary',
      size = 'default',
      testId = 'cf-ui-badge',
      className,
      ...otherProps
    } = props;

    return (
      <Box
        as="div"
        testId={testId}
        display="inline-block"
        className={cx(getBadgeStyles({ variant, size }), className)}
        {...otherProps}
        ref={ref}
      >
        {children}
      </Box>
    );
  },
);

Badge.displayName = 'Badge';
