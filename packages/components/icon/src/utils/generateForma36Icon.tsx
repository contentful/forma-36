import React from 'react';
import type { Icon } from '@phosphor-icons/react';
import { IconVariant } from '../types.js';
import { generateComponentWithVariants } from './generateComponentWithVariants.js';
import { wrapPhosphorIcon } from './wrapPhosphorIcon.js';
import type { GeneratedIconProps } from './generateIconComponent';
import type { GeneratedIconComponent } from './generateComponentWithVariants';

/**
 * Helper function to generate a Forma 36 icon component from a Phosphor icon component
 */
export function generateForma36Icon(
  PhosphorIcon: Icon,
): GeneratedIconComponent {
  const Wrapped = wrapPhosphorIcon(PhosphorIcon);

  return generateComponentWithVariants({
    variants: {
      [IconVariant.Active]: (props: GeneratedIconProps) => (
        <Wrapped {...props} weight="duotone" />
      ),
      [IconVariant.Default]: (props: GeneratedIconProps) => (
        <Wrapped {...props} />
      ),
    },
  });
}
