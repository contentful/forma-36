import React from 'react';
import { cx } from 'emotion';
import {
  Box,
  type CommonProps,
  type PropsWithHTMLElement,
  type ExpandProps,
} from '@contentful/f36-core';

import type { BadgeSize, BadgeVariant } from '../types';
import { getBadgeStyles } from './Badge.styles';
import { Caption } from '@contentful/f36-typography';

export type BadgeInternalProps = CommonProps & {
  /**
   * Determines the variation of the component
   * @default primary
   */
  variant?: BadgeVariant;
  children: React.ReactNode;
  /**
   * Sets the size of the component
   * @default default
   */
  size?: BadgeSize;
  /**
   * Expects any of the icon components. Renders the icon aligned to the start
   */
  startIcon?: React.ReactNode;
  /**
   * Expects any of the icon components. Renders the icon aligned to the end
   */
  endIcon?: React.ReactNode;
};

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
        className: cx(styles.badgeIcon, icon.props.className, {
          [styles.badgeIconCustomTiny]: size === 'small',
        }),
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
        {startIcon && iconContent(startIcon)}
        <Caption
          fontWeight="fontWeightMedium"
          isTruncated
          className={styles.badgeText}
        >
          {children}
        </Caption>
        {endIcon && iconContent(endIcon)}
      </Box>
    );
  },
);

Badge.displayName = 'Badge';
