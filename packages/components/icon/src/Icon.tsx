import { css, cx } from 'emotion';
import React, { forwardRef } from 'react';
import tokens from '@contentful/f36-tokens';
import { Box } from '@contentful/f36-core';
import type {
  BoxProps,
  ComponentVariant,
  PolymorphicComponent,
  PolymorphicComponentProps,
  PolymorphicComponentWithRef,
  Simplify,
} from '@contentful/f36-core';
import type {
  ComponentType,
  ExoticComponent,
  ReactElement,
  SVGAttributes,
} from 'react';

const DEFAULT_TAG = 'svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type IconComponent = ExoticComponent<any> | ComponentType<any>;

export type IconSize = 'large' | 'medium' | 'small' | 'tiny';

export type IconVariant = Simplify<ComponentVariant | 'muted' | 'white'>;

const sizes: { [key in IconSize]: { [key in 'height' | 'width']: string } } = {
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
  negative: tokens.colorNegative,
  positive: tokens.colorPositive,
  primary: tokens.blue600,
  secondary: tokens.gray900,
  warning: tokens.colorWarning,
  white: tokens.colorWhite,
};

type AsOrChildren =
  | {
      as: IconComponent;
      children?: never;
    }
  | {
      as?: never;
      children: ReactElement | ReactElement[];
    };

type IconInternalProps = {
  /**
   * Determines the size of the icon
   */
  size?: IconSize;
  /**
   * Whether or not to trim the icon width, i.e. set `width` to `auto`
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
} & Omit<BoxProps<'svg'>, 'as' | 'children' | 'display' | 'ref'> &
  SVGAttributes<SVGSVGElement>;

export type IconProps = Omit<
  PolymorphicComponentProps<IconComponent, IconInternalProps>,
  'as' | 'children'
> &
  AsOrChildren;

export const _Icon: PolymorphicComponentWithRef<
  IconInternalProps,
  IconComponent
> = (
  {
    as,
    children,
    className,
    variant = 'primary',
    size = 'small',
    testId = 'cf-ui-icon',
    trimmed,
    viewBox = '0 0 24 24',
    ...otherProps
  },
  forwardedRef,
) => {
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
  };

  if (as) {
    // @ts-expect-error mute polymorphic error
    return <Box display="inline-block" {...otherProps} {...shared} as={as} />;
  }

  return (
    <Box
      height="1em"
      viewBox={viewBox}
      width="1em"
      display="inline-block"
      {...otherProps}
      as={DEFAULT_TAG}
      {...shared}
    >
      {children}
    </Box>
  );
};

export const Icon: PolymorphicComponent<
  IconInternalProps,
  IconComponent
> = forwardRef(_Icon);
