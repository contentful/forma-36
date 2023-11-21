import { css } from 'emotion';
import tokens from '@contentful/f36-tokens';
import { ButtonSize } from '../types';

function sizeToStyles(size: ButtonSize) {
  switch (size) {
    case 'small': {
      return {
        padding: tokens.spacing2Xs,
        minHeight: '32px',
        minWidth: '32px',
      };
    }
    case 'medium': {
      return {
        padding: tokens.spacingXs,
        minHeight: '40px',
        minWidth: '40px',
      };
    }
    default: {
      return {};
    }
  }
}

export function getStyles({ size }: { size: ButtonSize }) {
  return {
    iconButton: css({
      ...sizeToStyles(size),
    }),
  };
}
