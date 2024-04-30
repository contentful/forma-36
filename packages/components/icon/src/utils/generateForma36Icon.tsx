import React from 'react';
import { IconVariant } from '../types.js';
import { generateComponentWithVariants } from './generateComponentWithVariants.js';
import { wrapPhosphorIcon } from './wrapPhosphorIcon.js';

/**
 * Helper function to generate a Forma 36 icon component from a Phosphor icon component
 */
export function generateForma36Icon(PhosphorIcon) {
  const Icon = wrapPhosphorIcon(PhosphorIcon);

  return generateComponentWithVariants({
    variants: {
      [IconVariant.Active]: (props) => <Icon {...props} weight="duotone" />,
      [IconVariant.Default]: Icon,
    },
  });
}
