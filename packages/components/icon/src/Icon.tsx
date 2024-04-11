import { css, cx } from 'emotion';
import React, {
  forwardRef,
  type ComponentType,
  type ExoticComponent,
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

const ICON_DEFAULT_TAG = 'svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type IconComponent = ExoticComponent<any> | ComponentType<any>;

export type IconSize = 'xlarge' | 'large' | 'medium' | 'small' | 'tiny';

export type IconVariant =
  | 'negative'
  | 'positive'
  | 'primary'
  | 'secondary'
  | 'warning'
  | 'muted'
  | 'white'
  | 'premium';

const sizes: { [key in IconSize]: { [key in 'height' | 'width']: string } } = {
  xlarge: {
    height: '48px',
    width: '48px',
  },
  large: {
    height: '32px',
    width: '32px',
  },
  medium: {
    height: '24px',
    width: '24px',
  },
  small: {
    height: '18px',
    width: '18px',
  },
  tiny: {
    height: '16px',
    width: '16px',
  },
};

const fills: { [key in IconVariant]: string } = {
  muted: tokens.gray600,
  negative: tokens.red600,
  positive: tokens.green600,
  primary: tokens.blue600,
  secondary: tokens.gray900,
  warning: tokens.colorWarning,
  white: tokens.colorWhite,
  premium: tokens.purple500,
};

export type IconInternalProps = CommonProps & {
  children?: ReactElement | ReactElement[];
  /**
   * Determines the size of the icon
   */
  size?: IconSize;
  /**
   * Whether or not to trim the icon width, i.e. set `width` to `auto`
   * @deprecated Trimmed icons will be removed in a future major release. Please try to adapt to the untrimmed icon variant.
   */
  trimmed?: boolean;
  /**
   * Determines the fill color used
   */
  variant?: IconVariant;
  /**
   * Custom SVG viewBox attribute to use
   */
  viewBox?: SVGAttributes<SVGSVGElement>['viewBox'];
};

export type IconProps<E extends React.ElementType = IconComponent> =
  PolymorphicProps<
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

export function _Icon<E extends React.ElementType = IconComponent>(
  {
    as,
    children,
    className,
    variant = 'primary',
    role = 'img',
    size = 'small',
    testId = 'cf-ui-icon',
    trimmed,
    viewBox = '0 0 24 24',
    ...otherProps
  }: IconProps<E>,
  forwardedRef: React.Ref<any>,
) {
  const shared = {
    className: cx(
      css({
        fill: fills[variant],
        height: sizes[size].height,
        width: trimmed ? 'auto' : sizes[size].width,
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
