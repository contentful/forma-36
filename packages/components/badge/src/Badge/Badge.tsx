import React from 'react';
import { cx } from 'emotion';
import {
  Box,
  type CommonProps,
  type PropsWithHTMLElement,
  type ExpandProps,
  type PickUnion,
} from '@contentful/f36-core';

import type { BadgeSize, BadgeVariant } from '../types';
import { getBadgeStyles } from './Badge.styles';
import { Caption } from '@contentful/f36-typography';

type BadgeSizeWithIconProps =
  | {
      /**
       * Sets the size of the component
       * @default default
       */
      size?: Exclude<BadgeSize, 'small'>;
      /**
       * Expects any of the icon components. Renders the icon aligned to the start
       */
      startIcon?: React.ReactElement;
      /**
       * Expects any of the icon components. Renders the icon aligned to the end
       */
      endIcon?: React.ReactElement;
    }
  | {
      /**
       * Sets the size of the component
       * @default default
       */
      size: PickUnion<BadgeSize, 'small'>;
      // We use discriminative union typing, so in case the size is set as small we don't allow startIcon or endIcon
      startIcon?: never;
      endIcon?: never;
    };

export type BadgeInternalProps = CommonProps &
  BadgeSizeWithIconProps & {
    /**
     * Determines the variation of the component
     * @default primary
     */
    variant?: BadgeVariant;

    children: React.ReactNode;
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
        className: cx(styles.badgeIcon, icon.props.className),
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
        <Caption
          fontWeight="fontWeightMedium"
          isTruncated
          className={styles.badgeText}
        >
          {children}
        </Caption>
        {endIcon && size === 'default' && iconContent(endIcon)}
      </Box>
    );
  },
);

Badge.displayName = 'Badge';
