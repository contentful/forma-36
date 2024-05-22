import React from 'react';
import type {
  Icon as PhosphorIcon,
  IconWeight as PhosphorIconWeight,
  IconProps as PhosphorIconProps,
} from '@phosphor-icons/react';
import tokens from '@contentful/f36-tokens';
import { Icon, sizes } from '../Icon.js';
import type { GeneratedIconProps } from './generateIconComponent.js';

type IconWeight = Extract<PhosphorIconWeight, 'duotone'>;

// Unfortunately we have to pass props directly to the Phosphor icon
export function wrapPhosphorIcon(PhosphorIcon: PhosphorIcon) {
  const Component = ({
    isActive = false,
    color = isActive ? tokens.blue500 : tokens.gray900,
    size = 'medium',
    ...props
  }: GeneratedIconProps & { weight?: IconWeight }) => {
    return (
      <Icon
        {...props}
        // Icon renders the component on the `as` prop with its own props
        // then we pass the props to the PhosphorIcon component
        as={(phosporProps: PhosphorIconProps) => (
          <PhosphorIcon {...phosporProps} color={color} size={sizes[size]} />
        )}
      />
    );
  };

  return Component;
}
