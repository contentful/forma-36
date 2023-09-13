import { cx } from 'emotion';
import React, {
  forwardRef,
  type ComponentType,
  type ExoticComponent,
  type ReactElement,
  type SVGAttributes,
} from 'react';
import {
  Box,
  type CommonProps,
  type PolymorphicComponent,
  type PolymorphicProps,
  type ExpandProps,
} from '@contentful/f36-core';
import { getIconStyles } from './Icon.styles';

const ICON_DEFAULT_TAG = 'svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type IconComponent = ExoticComponent<any> | ComponentType<any>;

export type NewIconSize = 'small' | 'medium';
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

type NewOrOldIconProps =
  | {
      // Render the icon with new sizes and styling. Not for general use.
      isNewIcon: true;
      /**
       * Determines the size of the icon
       */
      size?: NewIconSize;
    }
  | {
      isNewIcon?: false | never;
      /**
       * Determines the size of the icon
       */
      size?: IconSize;
    };

export type IconInternalProps = CommonProps &
  NewOrOldIconProps & {
    children?: ReactElement | ReactElement[];
    /**
     * Determines the fill color used
     */
    variant?: IconVariant;
    /**
     * Custom SVG viewBox attribute to use
     */
    viewBox?: SVGAttributes<SVGSVGElement>['viewBox'];
    /**
     * Whether or not to trim the icon width, i.e. set `width` to `auto`
     */
    trimmed?: boolean;
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
    isNewIcon,
    variant = isNewIcon ? 'secondary' : 'primary',
    role = 'img',
    size = 'small',
    testId = 'cf-ui-icon',
    trimmed,
    viewBox = '0 0 24 24',
    ...otherProps
  }: IconProps<E>,
  forwardedRef: React.Ref<any>,
) {
  const styles = getIconStyles({ isNewIcon, size, trimmed, variant });
  const shared = {
    className: cx(styles.icon, className),
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
