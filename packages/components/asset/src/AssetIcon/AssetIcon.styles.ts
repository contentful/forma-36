import tokens from '@contentful/f36-tokens';
import { css } from 'emotion';

export function getAssetIconStyles() {
  return {
    root: css({
      display: 'inline-block',
      width: '39px',
      height: '39px',
      'g, path': {
        fill: tokens.gray600,
      },
    }),
  };
}
