import { css } from 'emotion';
import tokens from '@contentful/f36-tokens';
import { type Density } from '@contentful/f36-utils';
import { ButtonSize } from '../types';

function sizeToStyles(size: ButtonSize, density: Density) {
  const isHighDensity = density === 'high';

  switch (size) {
    case 'small': {
      return {
        padding: isHighDensity ? `${tokens.spacing2Xs}` : tokens.spacing2Xs,
        minHeight: isHighDensity ? '16px' : '32px',
        maxHeight: isHighDensity ? '24px' : '32px',
        minWidth: isHighDensity ? '16px' : '32px',
      };
    }
    case 'medium': {
      return {
        padding: tokens.spacingXs,
        minHeight: isHighDensity ? '32px' : '40px',
        maxHeight: isHighDensity ? '32px' : '40px',
        minWidth: isHighDensity ? '32px' : '40px',
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
