import React from 'react';
import { cx } from 'emotion';
import {
  Box,
  Flex,
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

    const iconContent = (icon) => {
      const defaultIconColor: {
        [Property in BadgeInternalProps['variant']]: string;
      } = {
        primary: 'white',
        secondary: 'secondary',
        positive: 'white',
        negative: 'white',
        warning: 'white',
        'primary-filled': 'white',
        featured: 'white',
      };

      return (
        <Flex
          as="span"
          className={styles.badgeIcon({
            hasChildren: !!children,
            variant,
            size,
          })}
        >
          {React.cloneElement(icon, {
            size: `${size === 'small' ? 'tiny' : 'small'}`,
            variant:
              (!children && icon.props.variant) || defaultIconColor[variant],
          })}
        </Flex>
      );
    };

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
        {children}
        {endIcon && iconContent(endIcon)}
      </Box>
    );
  },
);

Badge.displayName = 'Badge';
