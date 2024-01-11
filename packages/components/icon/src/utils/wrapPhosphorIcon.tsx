import React from 'react';
import type { Icon as PhosphorIcon } from '@phosphor-icons/react';
import tokens from '@contentful/f36-tokens';
import { Icon, sizes } from '../Icon';
import type { GeneratedIconProps } from './generateIconComponent';

// Unfortunately we have to pass props directly to the Phosphor icon
export function wrapPhosphorIcon(PhosphorIcon: PhosphorIcon) {
  const Component = ({
    isActive = false,
    color = isActive ? tokens.blue500 : tokens.gray900,
    size = 'medium',
    ...props
  }: GeneratedIconProps & { weight?: 'fill' }) => {
    return (
      <Icon
        {...props}
        as={() => <PhosphorIcon {...props} color={color} size={sizes[size]} />}
      />
    );
  };

  return Component;
}
