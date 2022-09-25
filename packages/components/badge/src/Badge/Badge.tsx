import React from 'react';
import { cx } from 'emotion';
import {
  Box,
  type PropsWithHTMLElement,
  type ExpandProps,
} from '@contentful/f36-core';

import type { BadgeInternalProps } from '../types';
import { getBadgeStyles } from './Badge.styles';

export type BadgeProps = PropsWithHTMLElement<BadgeInternalProps, 'div'>;

export const Badge = React.forwardRef<HTMLDivElement, ExpandProps<BadgeProps>>(
  (props, ref) => {
    const styles = getBadgeStyles();
    const {
      children,
      variant = 'primary',
      size = 'default',
      testId = 'cf-ui-badge',
      startIcon,
      endIcon,
      className,
      ...otherProps
    } = props;

    const iconContent = (icon) =>
      React.cloneElement(icon, {
        size: 'tiny',
        variant: variant === 'primary-filled' ? 'white' : variant,
      });

    return (
      <Box
        as="div"
        testId={testId}
        display="inline-flex"
        className={cx(styles.badge({ variant, size }), className)}
        {...otherProps}
        ref={ref}
      >
        {startIcon && size === 'default' && iconContent(startIcon)}
        <span>{children}</span>
        {endIcon && size === 'default' && iconContent(endIcon)}
      </Box>
    );
  },
);

Badge.displayName = 'Badge';
