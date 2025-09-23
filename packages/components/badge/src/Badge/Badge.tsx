import React from 'react';
import { cx } from 'emotion';
import {
  Box,
  type CommonProps,
  type PropsWithHTMLElement,
  type ExpandProps,
} from '@contentful/f36-core';
import { Caption } from '@contentful/f36-typography';
import type * as CSS from 'csstype';

import type { BadgeSize, BadgeVariant } from '../types';
import { getBadgeStyles } from './Badge.styles';
import tokens from '@contentful/f36-tokens';
import { getIconColorToken, iconColorByVariant } from '@contentful/f36-utils';

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
  /**
   * By default the Badge uses CSS to capitalize only the first letter of the
   * badge text. This CSS is hit by a bug in Firefox that results in the badge
   * being rendered slightly too wide. To avoid the bug, set this property to
   * `none` to disable the text transformation. Please be sure the initial
   * letter of the badge text is already capitalized!
   */
  textTransform?: Extract<CSS.Property.TextTransform, 'none'> | undefined;
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
      textTransform = undefined,
      ...otherProps
    } = props;

    const iconContent = (icon) =>
      React.cloneElement(icon, {
        size: 'tiny',
        className: cx(styles.badgeIcon, icon.props.className, {
          [styles.badgeIconCustomTiny]: size === 'small',
        }),
        color: tokens[getIconColorToken(variant, iconColorByVariant)],
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
          className={styles.badgeText({ textTransform })}
        >
          {children}
        </Caption>
        {endIcon && iconContent(endIcon)}
      </Box>
    );
  },
);

Badge.displayName = 'Badge';
