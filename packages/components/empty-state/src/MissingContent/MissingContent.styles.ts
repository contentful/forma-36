import { css } from '@emotion/css';
import tokens from '@contentful/f36-tokens';

export function getStyles() {
  return {
    missingContent: css({
      display: 'inline-block',
      padding: `0 ${tokens.spacingXs}`,
      color: tokens.gray400,
    }),
  };
}
