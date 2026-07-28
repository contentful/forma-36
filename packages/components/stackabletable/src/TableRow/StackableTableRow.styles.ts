import { css } from '@emotion/css';
import tokens from '@contentful/f36-tokens';

export const getStackableTableRowStyles = () => ({
  ghostTitle: (stackableBreakpoint: string) =>
    css({
      [`@container(width <=${stackableBreakpoint})`]: {
        '&': {
          color: tokens.gray600,
          fontSize: tokens.fontSizeS,
          display: 'block',
        },
      },
      [`@container (${stackableBreakpoint}< width)`]: {
        '&': {
          display: 'none',
        },
      },
    }),
});
