import { css } from '@emotion/css';
import tokens from '@contentful/f36-tokens';
import { type Density } from '@contentful/f36-utils';
import { ButtonSize } from '../types';

function sizeToStyles(size: ButtonSize, density: Density) {
  const isHighDensity = density === 'high';

  switch (size) {
    case 'small': {
      return {
        padding: isHighDensity ? `${tokens.spacing2Xs}` : tokens.spacing2Xs,
        minHeight: isHighDensity ? tokens.spacingL : tokens.spacingXl,
        minWidth: isHighDensity ? tokens.spacingL : tokens.spacingXl,
      };
    }
    case 'medium': {
      return {
        padding: tokens.spacingXs,
        minHeight: isHighDensity ? tokens.spacingXl : '40px',
        minWidth: isHighDensity ? tokens.spacingXl : '40px',
      };
    }
    default: {
      return {};
    }
  }
}

export function getStyles({
  size,
  density,
}: {
  size: ButtonSize;
  density: Density;
}) {
  return {
    iconButton: css({
      ...sizeToStyles(size, density),
    }),
  };
}
