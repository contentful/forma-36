import { css, cx } from '@emotion/css';
import React, {
  forwardRef,
  type ReactElement,
  type SVGAttributes,
} from 'react';
import {
  type CommonProps,
  type PolymorphicComponent,
  type PolymorphicProps,
  type ExpandProps,
} from '@contentful/f36-core';
import type { IconSize } from './types.js';

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

export type IconProps<E extends React.ElementType = typeof ICON_DEFAULT_TAG> =
  PolymorphicProps<
    IconInternalProps,
    E,
    'as' | 'children' | 'width' | 'height'
  >;

const useAriaHidden = ({ ariaLabel, ariaLabelledBy }) => {
  if (ariaLabel || ariaLabelledBy) {
    return {};
  }

  return {
    'aria-hidden': true,
  };
};

export function IconBase<E extends React.ElementType = typeof ICON_DEFAULT_TAG>(
  props: IconProps<E>,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  forwardedRef: React.Ref<any>,
) {
  const {
    as: Element = ICON_DEFAULT_TAG,
    children,
    className,
    color = 'currentColor',
    role = 'img',
    size = 'medium',
    testId = 'cf-ui-icon',
    viewBox = '0 0 20 20',
    isActive,
    'aria-label': ariaLabel,
    'aria-labelledBy': ariaLabelledBy,
    ...otherProps
  } = props;
  const shared = {
    className: cx(
      css({
        color,
        height: sizes[size],
        width: sizes[size],
      }),
      className,
    ),
    ['data-test-id']: testId,
    ref: forwardedRef,
    role,
  };

  const ariaHiddenProps = useAriaHidden({ ariaLabel, ariaLabelledBy });

  return (
    <Element
      display="inline-block"
      aria-label={ariaLabel}
      aria-labelledby={ariaLabelledBy}
      {...(Element === ICON_DEFAULT_TAG ? { viewBox } : {})}
      {...ariaHiddenProps}
      {...otherProps}
      {...shared}
    >
      {children}
    </Element>
  );
}

export const Icon = forwardRef(IconBase) as PolymorphicComponent<
  ExpandProps<IconInternalProps>,
  typeof ICON_DEFAULT_TAG,
  'width' | 'height'
>;
