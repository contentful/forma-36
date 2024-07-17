import { css, cx } from 'emotion';
import React, {
  forwardRef,
  type ElementType,
  type ReactElement,
  type SVGAttributes,
} from 'react';
import tokens from '@contentful/f36-tokens';
import {
  Box,
  type CommonProps,
  type PolymorphicComponent,
  type PolymorphicProps,
  type ExpandProps,
} from '@contentful/f36-core';
import type { IconComponent, IconSize } from './types';

const ICON_DEFAULT_TAG = 'svg';

export const sizes: { [key in IconSize]: `${number}px` } = {
  tiny: '14px',
  small: '16px',
  medium: '20px',
};

export type IconInternalProps = CommonProps & {
  children?: ReactElement | ReactElement[];
  /**
   * Determines the color of the icon
   */
  // @todo: We can't use the ColorTokens type here yet. Maybe fix in v5;
  color?: string;
  /**
   * Determines the active state of the icon
   */
  isActive?: boolean;
  /**
   * Determines the size of the icon
   */
  size?: IconSize;
  /**
   * Custom SVG viewBox attribute to use
   */
  viewBox?: SVGAttributes<SVGSVGElement>['viewBox'];
};

export type IconProps<E extends ElementType = IconComponent> = PolymorphicProps<
  IconInternalProps,
  E,
  'as' | 'children' | 'width' | 'height'
>;

const useAriaHidden = (
  props: Pick<
    IconProps<typeof ICON_DEFAULT_TAG>,
    'aria-label' | 'aria-labelledby'
  >,
) => {
  const ariaLabel = props['aria-label'];
  const ariaLabelBy = props['aria-labelledby'];

  if (ariaLabel || ariaLabelBy) {
    return {};
  }

  return {
    'aria-hidden': true,
  };
};

export function _Icon<E extends ElementType = IconComponent>(
  {
    as,
    children,
    className,
    isActive = false,
    color = isActive ? tokens.blue500 : tokens.gray900,
    role = 'img',
    size = 'medium',
    testId = 'cf-ui-icon',
    viewBox = '0 0 20 20',
    ...otherProps
  }: IconProps<E>,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  forwardedRef: React.Ref<any>,
) {
  const shared = {
    className: cx(
      css({
        fill: color,
        height: sizes[size],
        width: sizes[size],
      }),
      className,
    ),
    ref: forwardedRef,
    testId,
    role,
  };

  const ariaHiddenProps = useAriaHidden(otherProps);

  if (as) {
    return (
      <Box
        display="inline-block"
        {...ariaHiddenProps}
        {...otherProps}
        {...shared}
        as={as as React.ElementType}
      />
    );
  }

  return (
    <Box
      viewBox={viewBox}
      display="inline-block"
      {...ariaHiddenProps}
      {...otherProps}
      as={ICON_DEFAULT_TAG}
      {...shared}
    >
      {children}
    </Box>
  );
}

export const Icon: PolymorphicComponent<
  ExpandProps<IconInternalProps>,
  typeof ICON_DEFAULT_TAG,
  'width' | 'height'
> = forwardRef(_Icon);
