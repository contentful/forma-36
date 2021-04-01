import React, { forwardRef } from 'react';
import type { ReactElement } from 'react';

import { Icon } from './Icon';
import type { IconProps } from './Icon';

export type GeneratedIconProps = Omit<
  IconProps,
  'as' | 'children' | 'name' | 'viewBox'
> & { children?: never };

type GenerateIconParameters = {
  /**
   * Icon name is used as the generated icon's component display name
   */
  name?: string;
  /**
   * The SVG path(s) to render in the icon wrapper
   */
  path: ReactElement;
  /**
   * A collection of default props to set on the generated icon
   */
  props?: GeneratedIconProps;
  /**
   * Whether or not to trim the icon width, i.e. set `width` to `auto`
   */
  trimmed?: IconProps['trimmed'];
  /**
   * Custom SVG viewBox attribute to use for the generated icon
   */
  viewBox?: IconProps['viewBox'];
};

export function generateIcon({
  name,
  path,
  props: defaultProps,
  trimmed,
  viewBox,
}: GenerateIconParameters) {
  const Component = forwardRef<SVGSVGElement, GeneratedIconProps>(function (
    props,
    forwardedRef,
  ) {
    return (
      <Icon
        viewBox={viewBox}
        {...defaultProps}
        {...props}
        ref={forwardedRef}
        trimmed={trimmed}
      >
        {path}
      </Icon>
    );
  });

  if (name) {
    Component.displayName = name;
  }

  return Component;
}
